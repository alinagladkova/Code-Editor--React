import cn from "classnames";
import styles from "./topbar.module.scss";
import Button from "../../ui/button/Button";

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";

export default function Topbar() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  //делаем функцию открыть закрыть сайдбар

  return (
    <div className={cn(styles.topbar)}>
      <div className={cn(styles[`topbar__task-control`])}>
        <div className={cn(styles[`topbar__btn`])}>
          {/* handler={() => setIsSidebarActive(true)} */}
          <Button use="openSidebar" text="Task list" />
        </div>
        <div className={cn(styles[`topbar__btn`])}>
          <Button use="switchLeft" icon={<BsChevronLeft />} />
        </div>
        <div className={cn(styles[`topbar__btn`])}>
          <Button use="switchRight" icon={<BsChevronRight />} />
        </div>
      </div>
      <div className={cn(styles[`topbar__task-run`])}>
        <div className={cn(styles[`topbar__btn`])}>
          <Button use="run" text="Run code" />
        </div>
      </div>
      <div className={cn(styles[`topbar__theme-switcher`])}>
        <div className={cn(styles[`topbar__btn`])}>
          {/* <MdLightMode /> */}
          <Button use="switchTheme" icon={<CiLight />} />
        </div>
      </div>
    </div>
  );
}
