import cn from "classnames";
import styles from "./taskTab.module.scss";

export default function TaskTab({ task }) {
  return (
    <li className={cn(styles.task)}>
      <span className={cn(styles[`task__name`])}>{task.name}</span>
      <span className={cn(styles[`task__level`], styles[`task__level--${task.level}`])}>{task.level}</span>
    </li>
  );
}
