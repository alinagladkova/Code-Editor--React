import cn from "classnames";
import styles from "./sidebar.module.scss";
import { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import TaskTab from "../taskTab/TaskTab";
import Filter from "../filter/Filter";

import { IoMdClose } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function Sidebar({ isOpen, handleClose, handler }) {
  const [isClosed, setIsClosed] = useState(isOpen);
  const [inputValue, setInputValue] = useState("");
  const [isFilterOpen, setFilterIsOpen] = useState(false);
  const [selectedOptions, setselectedOptions] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [serverError, setServerError] = useState("");

  // useEffect(() => {
  //   setIsClosed(!isOpen);
  // }, [isClosed]);

  //закрытие сайдбара на крестик
  const setStateIsClosed = () => {
    setIsClosed(!isOpen);
    handleClose(!isOpen);
  };

  //получаем ввод поисковика
  const searchHandler = (inputValue) => {
    setInputValue(inputValue);
  };

  //отображение фильтра
  const showFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  //получаем данные из фильтра
  const getFilterData = (options) => {
    setselectedOptions((prev) => Object.assign({ ...prev, ...options }));
  };

  const handleSelectTask = (task) => {
    // setTimeout(() => {
    handler(task);
    // }, 0);
    //   setIsClosed(false); // Закрываем сайдбар после небольшой задержки
  };

  const filterTasks = (task) => {
    const hasMatchingTags = selectedOptions.tags.length === 0 || selectedOptions.tags.some((tag) => task.tags.includes(tag));
    const matchesDifficulty = !selectedOptions.difficulty || selectedOptions.difficulty === task.level;
    return hasMatchingTags && matchesDifficulty;
  };

  //загружаем задачи с сервера
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // fetch("/api/tasks")
        //   .then((res) => res.json())
        //   .then((json) => console.log(json));
        const response = await fetch("api/tasks");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log(response);

        // console.log(response);
        const data = await response.json();

        setTasks(data.tasks);
      } catch (error) {
        // console.log(error.message);

        setServerError(error.message);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className={cn(styles.sidebar, isOpen ? styles[`sidebar--open`] : "")}>
      <div className={cn(styles[`sidebar__header`])}>
        <h3 className={cn(styles[`sidebar__text`])}>Task List</h3>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="close" icon={<IoMdClose />} handler={setStateIsClosed} />
        </div>
      </div>
      <div className={cn(styles[`sidebar__control`])}>
        <div className={cn(styles[`sidebar__search`])}>
          <Input type="text" placeholder="Search" use="sidebarSearch" icon={<CiSearch />} inputHandler={searchHandler} />
        </div>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="filter" icon={<CiFilter />} handler={showFilter} />
        </div>
      </div>
      <div className={cn(styles[`sidebar__filter`], isFilterOpen ? styles[`sidebar__filter--open`] : "")}>
        <Filter handlerFilter={getFilterData} />
      </div>
      <ul className={cn(styles[`sidebar__list`])}>
        {/* {console.log(serverError)} */}
        {serverError ? (
          <div className={cn(styles[`sidebar__error`])}>
            <p>Error: {serverError}.</p>
            <p>Try again later.</p>
          </div>
        ) : tasks.length === 0 ? (
          <p className={cn(styles[`sidebar__error`])}>No tasks for now</p>
        ) : (
          tasks
            .filter((task) => {
              return task.name.toLowerCase().includes(inputValue);
            })
            .filter((task) => filterTasks(task))
            .map((task) => (
              <div
                className={cn(styles[`sidebar__task`])}
                key={task.id}
                onClick={() => {
                  handleSelectTask(task);
                }}
              >
                <TaskTab task={task} />
                {/* {console.log(task)} */}
              </div>
            ))
        )}
      </ul>
    </div>
  );
}
