import cn from "classnames";
import styles from "./input.module.scss";
import { useState } from "react";
import Button from "../button/Button";

export default function Input({ type, placeholder, use, icon, inputHandler = () => {}, handler }) {
  const [value, setValue] = useState("");

  const inputAction = (e) => {
    e.preventDefault();
    setValue(e.target.value.trim());
    if (type === "text") {
      return inputHandler(e.target.value.trim());
    }
  };

  return (
    <div className={cn(styles.input)}>
      <input className={cn(styles[`input__field`])} type={type} placeholder={placeholder} onChange={inputAction}></input>
      <Button use={use} icon={icon} handler={handler}></Button>
    </div>
  );
}
