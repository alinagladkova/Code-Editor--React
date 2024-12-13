import cn from "classnames";
import styles from "./label.module.scss";

export default function Label({ label, id }) {
  return (
    <label className={cn(styles.label)} htmlFor={id}>
      {label}
    </label>
  );
}
