import cn from "classnames";
import styles from "./tag.module.scss";
import { CiShoppingTag } from "react-icons/ci";

export default function Tag({ tag }) {
  return (
    <div className={cn(styles.tag)}>
      <span>{tag}</span>
      <CiShoppingTag />
    </div>
  );
}
