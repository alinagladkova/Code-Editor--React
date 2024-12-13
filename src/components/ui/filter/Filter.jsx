import cn from "classnames";
import styles from "./filter.module.scss";
import Selector from "../selector/Selector";
import MultiSelector from "../multiSelector/MultiSelector";

export default function Filter() {
  return (
    <div className={cn(styles.filter)}>
      <div className={cn(styles[`filter__section`])}>
        <Selector name="difficulty" title="Difficulty" options={["Easy", "Medium", "Hard"]} />
      </div>
      <div className={cn(styles[`filter__section`])}>
        <Selector name="status" title="Status" options={["ToDo", "Solved", "Attempted"]} />
      </div>
      <div className={cn(styles[`filter__section`])}>
        {/* mockData={mockData} id={id} name={name}*/}
        <MultiSelector title="Tags" />
      </div>
    </div>
  );
}
