import cn from "classnames";
import styles from "./taskTab.module.scss";

export default function TaskTab({ task }) {
  return (
    <li className={cn(styles.task)}>
      <span className={cn(styles[`task__name`])}>{task.name}</span>
      <span
        className={cn(
          styles[`task__level`],
          task.level === "easy" ? styles[`task__level--easy`] : task.level === "medium" ? styles[`task__level--medium`] : styles[`task__level--hard`]
        )}
      >
        {task.level}
      </span>
    </li>
  );
}
