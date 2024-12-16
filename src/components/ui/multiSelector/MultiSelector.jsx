import cn from "classnames";
import styles from "./multiselector.module.scss";
import { useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { IoMdClose } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

//крестик в поиске не чистит поле ввода
export default function MultiSelector({ title, handler }) {
  const [tags, setTags] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tagsArray/")
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }, []);

  //открываем окно опций при нажатии на v
  const setStateIsShown = () => {
    setIsShown((prev) => !prev);
  };

  //получаем вводимое в поле Search
  const inputHandler = (inputValue) => {
    setInputValue(inputValue);
  };

  //выбираем опцию(tag) из списка и добавляем в массив
  const handleSelectTag = (newTag) => {
    //проверяем нет ли такого же тэга в массиве
    const checkTagAdded = selectedOptions.find((tag) => tag.id === newTag.id);
    if (!checkTagAdded) {
      const addedTags = tags.filter((option) => option.id === newTag.id);
      setSelectedOptions((prev) => [...prev, ...addedTags]);
    }
  };

  //отправляем выбранные тэги в родителя, чтобы по ним отфильтровать список задач
  useEffect(() => {
    handler(selectedOptions.map((tag) => tag.name.toLowerCase()));
  }, [selectedOptions]);

  //чистим выбранные опции
  const clearSelectedOptions = () => {
    setSelectedOptions([]);
  };

  //чистим поисковое поле в options
  const clearInputSearch = () => {
    setInputValue("");
  };

  //обработчик клика на Esc
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === "Escape") {
        setIsShown(false);
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isShown]);

  return (
    <div className={cn(styles.multiselect)}>
      <div className={cn(styles[`multiselect__control`])}>
        <div className={cn(styles[`multiselect__title`])}>
          <p>{title}</p>
          <div className={cn(styles[`multiselect__tags-number`], selectedOptions.length > 0 ? styles[`multiselect__tags-number--active`] : "")}>
            <p>{selectedOptions.length}</p>
            <div className={cn(styles[`multiselect__tags-number-remove`])}>
              <Button use="close" icon={<IoMdClose />} handler={clearSelectedOptions} />
            </div>
          </div>
        </div>
        <Button use="close" icon={isShown ? <BsChevronDown /> : <BsChevronUp />} handler={setStateIsShown} />
      </div>
      <div className={cn(styles[`multiselect__options`], isShown ? styles[`multiselect__options--active`] : "")}>
        <div className={cn(styles[`multiselect__options-search`])}>
          <Input use="closeOptionSearch" icon={<IoMdClose />} type="text" inputHandler={inputHandler} handler={clearInputSearch} />
        </div>
        <div className={cn(styles[`multiselect__options-list`])}>
          {tags
            .filter((tag) => {
              if (inputValue !== undefined) return tag.name.toLowerCase().includes(inputValue.toLowerCase());
            })
            .map((tag) => (
              <div
                className={cn(styles[`multiselect__option`], selectedOptions.includes(tag) ? styles[`multiselect__option--selected`] : "")}
                key={tag.id}
                onClick={() => handleSelectTag(tag)}
              >
                {tag.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
