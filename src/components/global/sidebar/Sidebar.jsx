import cn from "classnames";
import styles from "./sidebar.module.scss";
import { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import TaskTab from "../taskTab/TaskTab";
import Filter from "../../ui/filter/Filter";

import { IoMdClose } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function Sidebar({ isOpen, handleClose }) {
  const [isClosed, setIsClosed] = useState(isOpen);
  const [inputValue, setInputValue] = useState("");
  const [isFilterOpen, setFilterIsOpen] = useState(false);
  const [selectedOptions, setselectedOptions] = useState([]);
  const [taskArray, setTaskArray] = useState([]);

  const setStateIsClosed = () => {
    setIsClosed(!isOpen);
    handleClose(!isOpen);
  };

  const searchHandler = (inputValue) => {
    setInputValue(inputValue);
  };

  const showFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  const getFilterData = (options) => {
    setselectedOptions((prev) => [...prev, ...options].filter((value, i, arr) => arr.indexOf(value) === i));
  };

  useEffect(() => {
    fetch("http://localhost:5000/tasksArray/")
      .then((response) => response.json())
      .then((data) => {
        setTaskArray(data);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
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
        {taskArray
          .filter((task) => {
            return task.name.toLowerCase().includes(inputValue);
          })
          .filter((task) => {
            if (selectedOptions.length) {
              console.log(selectedOptions);
              return (
                selectedOptions.includes(task.level) &&
                (selectedOptions.includes(task.level) || selectedOptions.filter((value) => task.tags.includes(value))) &&
                selectedOptions.filter((value) => task.tags.includes(value))
              );
            }
            return true;
          })
          .map((task) => (
            <div className={cn(styles[`sidebar__task`])} key={task.id}>
              <TaskTab task={task} />
            </div>
          ))}
      </ul>
    </div>
  );
}
