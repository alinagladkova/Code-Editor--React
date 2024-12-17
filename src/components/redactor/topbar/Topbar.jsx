import cn from "classnames";
import styles from "./topbar.module.scss";
import Button from "../../ui/button/Button";

import { CiLight } from "react-icons/ci";
import { useTheme } from "../../../useTheme";
import { useEffect } from "react";

export default function Topbar({ handler, handleTheme }) {
  const { theme, setTheme } = useTheme("light");

  const handleOpenSidebar = () => {
    handler(true);
  };

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    handleTheme(theme);
  });

  return (
    <div className={cn(styles.topbar)}>
      <div className={cn(styles[`topbar__task-control`])}>
        <div className={cn(styles[`topbar__btn`])}>
          <Button use="openSidebar" text="Task list" handler={handleOpenSidebar} />
        </div>
      </div>
      <div className={cn(styles[`topbar__theme-switcher`])}>
        <div className={cn(styles[`topbar__btn`])}>
          <Button use="switchTheme" icon={<CiLight />} handler={handleThemeChange} />
        </div>
      </div>
    </div>
  );
}
