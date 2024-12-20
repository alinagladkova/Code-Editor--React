import cn from "classnames";
import styles from "./redactorWrapper.module.scss";
import TaskDescription from "../taskDescription/TaskDescription";
import CodeArea from "../codeArea/CodeArea";
import Result from "../result/Result";
import { useState } from "react";

export default function RedactorWrapper({ theme, task }) {
  const [codeValue, setCodeValue] = useState({});

  const handleGetValue = (value) => {
    setCodeValue(value);
  };

  return (
    <div className={cn(styles[`redactor-wrapper`])}>
      <div className={cn(styles[`redactor-wrapper__description`])}>
        <TaskDescription task={task} />
      </div>
      <div className={cn(styles[`redactor-wrapper__action`])}>
        <div className={cn(styles[`redactor-wrapper__code-area`])}>
          <CodeArea theme={theme} handleGetValue={handleGetValue} />
        </div>
        <div className={cn(styles[`redactor-wrapper__code-result`])}>
          <Result codeValue={codeValue} />
        </div>
      </div>
    </div>
  );
}
