import cn from "classnames";
import styles from "./taskDescription.module.scss";
import { TbFileDescription } from "react-icons/tb";
import Tag from "../tag/Tag";

export default function TaskDescription({ task }) {
  return (
    <div className={cn(styles[`task-description`])}>
      <div className={cn(styles[`task-description__top`])}>
        <TbFileDescription />
        <span>Description</span>
      </div>
      {task && (
        <div className={cn(styles[`task-description__content`])}>
          <h3 className={cn(styles[`task-description__title`])}>{task.name}</h3>
          <div className={cn(styles[`task-description__details`])}>
            <p className={cn(styles[`task-description__level`], styles[`task-description__level--${task.level}`])}>{task.level}</p>
            <div className={cn(styles[`task-description__tags`])}>
              {task.tags.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
          </div>
          <div className={cn(styles[`task-description__task-text`])}>{task.description}</div>
        </div>
      )}
    </div>
  );
}
