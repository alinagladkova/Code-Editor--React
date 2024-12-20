import cn from "classnames";
import styles from "./selector.module.scss";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import Button from "../button/Button";

export default function Selector({ title, options, handler = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  //открываем окно опций при нажатии на v
  const openOptions = () => {
    setIsOpen((prev) => !prev);
  };

  //получаем опцию из списка
  const handleSelectOption = (e) => {
    setSelectedOption(e.target.innerHTML);
    setIsOpen(false);
  };

  useEffect(() => {
    handler(selectedOption.toLowerCase());
  }, [selectedOption]);

  //обработчик клика на Esc
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <>
      <div className={cn(styles.selector)}>
        <p className={cn(styles[`selector__title`])}>{title}</p>
        <Button use="openSelect" icon={isOpen ? <BsChevronDown /> : <BsChevronUp />} handler={openOptions} />
        <ul className={cn(styles[`selector__list`], !isOpen ? styles[`selector__list`] : styles[`selector__list--open`])}>
          {options.map((option) => (
            <li
              className={cn(styles[`selector__option`], selectedOption === option ? styles[`selector__option--selected`] : "")}
              key={option}
              onClick={(e) => handleSelectOption(e)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
