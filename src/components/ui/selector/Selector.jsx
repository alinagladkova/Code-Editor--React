import cn from "classnames";
import styles from "./selector.module.scss";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import Button from "../button/Button";

export default function Selector({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOptions = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className={cn(styles.selector)}>
        <p className={cn(styles[`selector__title`])}>{title}</p>
        <Button use="openSelect" icon={isOpen ? <BsChevronDown /> : <BsChevronUp />} handler={openOptions} />
        <ul className={cn(styles[`selector__list`], !isOpen ? styles[`selector__list`] : styles[`selector__list--open`])}>
          {options.map((option) => (
            <li className={cn(styles[`selector__option`])} key={option}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
