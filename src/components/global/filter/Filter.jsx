import cn from "classnames";
import styles from "./filter.module.scss";
import Selector from "../../ui/selector/Selector";
import MultiSelector from "../../ui/multiSelector/MultiSelector";
import Button from "../../ui/button/Button";
import { useEffect, useState } from "react";
import { tags } from "../../../mockData";

const difficultyOptions = ["Easy", "Medium", "Hard"];

export default function Filter({ handlerFilter }) {
  const [tagsSelected, setTagsSelected] = useState([]);
  const [difficultySelected, setDifficultySelected] = useState("");

  //получаем данные из селекторов
  const handleGetSelectorValue = (option) => {
    if (Array.isArray(option)) {
      if (!option.length) {
        //если приходит пустой массив, то и здесь мы его чистим
        setTagsSelected([]);
      }
      setTagsSelected((prev) => {
        return [...prev, ...option].filter((value, i, arr) => arr.indexOf(value) === i);
      });
    } else {
      setDifficultySelected(option);
    }
  };

  //передаем данные о выбранных задачах в родителя, чтобы изменить отображение списка
  useEffect(() => {
    handlerFilter({ tags: tagsSelected, difficulty: difficultySelected });
  }, [tagsSelected, difficultySelected]);

  const clearFilter = () => {
    setDifficultySelected("");
    setTagsSelected([]);
  };

  return (
    <div className={cn(styles.filter)}>
      <div className={cn(styles[`filter__block`])}>
        <div className={cn(styles[`filter__section`])}>
          <Selector name="difficulty" title="Difficulty" options={difficultyOptions} handler={handleGetSelectorValue} />
        </div>
        <div className={cn(styles[`filter__section`])}>
          <MultiSelector title="Tags" options={tags} handler={handleGetSelectorValue} />
        </div>
      </div>
      <div className={cn(styles[`filter__btn`])}>
        <Button use="clearFilter" text="Clear filter" handler={clearFilter} />
      </div>
    </div>
  );
}
