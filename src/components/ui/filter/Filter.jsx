import cn from "classnames";
import styles from "./filter.module.scss";
import Selector from "../selector/Selector";
import MultiSelector from "../multiSelector/MultiSelector";
import { useEffect, useState } from "react";
import Button from "../button/Button";

export default function Filter({ handlerFilter }) {
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const [optionsChosen, setOptionsChosen] = useState([]);

  const handleGetSelectorValue = (option) => {
    setOptionsChosen((prev) => {
      return [...prev, ...option].filter((value, i, arr) => arr.indexOf(value) === i);
    });
  };

  useEffect(() => {
    handlerFilter(optionsChosen);
  }, [optionsChosen]);

  // const clearFilter = () => {
  //   setOptionsChosen([]);
  // };

  return (
    <div className={cn(styles.filter)}>
      <div className={cn(styles[`filter__block`])}>
        <div className={cn(styles[`filter__section`])}>
          <Selector name="difficulty" title="Difficulty" options={difficultyOptions} handler={handleGetSelectorValue} />
        </div>
        <div className={cn(styles[`filter__section`])}>
          <MultiSelector title="Tags" handler={handleGetSelectorValue} />
        </div>
      </div>
      <div className={cn(styles[`filter__btn`])}>
        <Button use="clearFilter" text="Clear filter" handler={() => setOptionsChosen([])} />
      </div>
    </div>
  );
}
