import cn from "classnames";
import styles from "./sidebar.module.scss";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";

import { IoMdClose } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import TaskTab from "../taskTab/TaskTab";
import Filter from "../../ui/filter/Filter";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [isFilterOpen, setFilterIsOpen] = useState(isActive);

  const setStateIsActive = () => {
    // setIsActive(!isActive);
  };

  const showFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  return (
    <div className={cn(styles.sidebar, isActive ? styles[`sidebar--active`] : "")}>
      <div className={cn(styles[`sidebar__header`])}>
        <h3 className={cn(styles[`sidebar__text`])}>Task List</h3>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="close" icon={<IoMdClose />} handler={setStateIsActive} />
        </div>
      </div>
      <div className={cn(styles[`sidebar__control`])}>
        <div className={cn(styles[`sidebar__search`])}>
          {/* inputHandler handler */}
          <Input type="text" placeholder="Search" use="sidebarSearch" icon={<CiSearch />} />
        </div>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="filter" icon={<CiFilter />} handler={showFilter} />
        </div>
      </div>
      <div className={cn(styles[`sidebar__filter`], isFilterOpen ? styles[`sidebar__filter--open`] : "")}>
        <Filter />
      </div>
      <ul className={cn(styles[`sidebar__list`])}>
        <TaskTab />
      </ul>
    </div>
  );
}
