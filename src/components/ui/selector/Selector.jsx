import cn from "classnames";
import styles from "./selector.module.scss";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import Button from "../button/Button";

export default function Selector({ title, options, handler }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const openOptions = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectLevel = (newLevel) => {
    const checkLevelsAdded = selectedOptions.find((level) => level === newLevel);
    if (!checkLevelsAdded) {
      const addedLevels = options.filter((option) => option === newLevel);
      setSelectedOptions((prev) => [...prev, ...addedLevels]);
    }
  };

  useEffect(() => {
    handler(selectedOptions.map((level) => level.toLowerCase()));
  }, [selectedOptions]);

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
              className={cn(styles[`selector__option`], selectedOptions.includes(option) ? styles[`selector__option--selected`] : "")}
              key={option}
              onClick={() => handleSelectLevel(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
