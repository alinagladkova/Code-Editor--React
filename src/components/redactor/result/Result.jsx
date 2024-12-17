import cn from "classnames";
import styles from "./result.module.scss";
import { GrStatusGood } from "react-icons/gr";
import Button from "../../ui/button/Button";

export default function Result({ codeValue }) {
  console.log(codeValue);

  const runCode = async () => {
    // const sourceCode = codeValue.code.current.getValue();
    // if (!sourceCode) return;
    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language: codeValue.language, code: codeValue.code }),
      });

      const result = await response.json();
      console.log(result); // Обработка результата
    } catch {}
  };

  return (
    <div className={cn(styles.result)}>
      <div className={cn(styles[`result__top`])}>
        <div className={cn(styles[`result__title`])}>
          <GrStatusGood />
          <span>Result</span>
        </div>
        <div className={cn(styles[`result__btn`])}>
          <Button use="run" text="Run code" handler={runCode} />
        </div>
      </div>
      <div className={cn(styles[`result__field`])}></div>
    </div>
  );
}
