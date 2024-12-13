import cn from "classnames";
import styles from "./button.module.scss";

export default function Button({ use, text, icon, handler }) {
  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={handler}>
      {icon || text}
    </button>
  );
}
