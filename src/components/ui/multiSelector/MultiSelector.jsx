import cn from "classnames";
import styles from "./multiselector.module.scss";
import { useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { IoMdClose } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

//крестик в поиске не чистит поле ввода
export default function MultiSelector({ title, options, serverError, handler }) {
  const [isShown, setIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  //открываем окно опций при нажатии на v
  const setStateIsShown = () => {
    setIsShown((prev) => !prev);
  };

  //получаем вводимое в поле Search
  const inputHandler = (inputValue) => {
    setInputValue(inputValue);
  };

  //выбираем опцию из списка и добавляем в массив
  const handleSelectTag = (newOption) => {
    //проверяем нет ли такой же опции в массиве
    const checkOptionAdded = selectedOptions.find((option) => option.id === newOption.id);
    if (!checkOptionAdded) {
      const addedOptions = options.filter((option) => option.id === newOption.id);
      setSelectedOptions((prev) => [...prev, ...addedOptions]);
    }
  };

  //отправляем выбранные опции в родителя, чтобы по ним отфильтровать список задач
  useEffect(() => {
    handler(selectedOptions.map((option) => option.name));
  }, [selectedOptions]);

  //чистим выбранные опции
  const clearSelectedOptions = () => {
    setSelectedOptions([]);
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
          <Input use="closeOptionSearch" icon={<IoMdClose />} type="text" inputHandler={inputHandler} handler={() => setInputValue("")} />
        </div>
        <div className={cn(styles[`multiselect__options-list`])}>
          {serverError ? (
            <div className={cn(styles[`multiselect__error`])}>
              <p>Error: {serverError}.</p>
            </div>
          ) : options.length === 0 ? (
            <p className={cn(styles[`multiselect__error`])}>No tags for now</p>
          ) : (
            options
              .filter((option) => {
                if (inputValue !== undefined) return option.name.toLowerCase().includes(inputValue.toLowerCase());
              })
              .map((option) => (
                <div
                  className={cn(styles[`multiselect__option`], selectedOptions.includes(option) ? styles[`multiselect__option--selected`] : "")}
                  key={option.id}
                  onClick={() => handleSelectTag(option)}
                >
                  {option.name}
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}
