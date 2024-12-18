import cn from "classnames";
import styles from "./result.module.scss";
import { GrStatusGood } from "react-icons/gr";
import Button from "../../ui/button/Button";
import { executeCode } from "../../../server";
import { useState } from "react";

export default function Result({ codeValue }) {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = codeValue.code.current.getValue();
    const language = codeValue.language;
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      setServerError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn(styles.result)}>
      <div className={cn(styles[`result__top`])}>
        <div className={cn(styles[`result__title`])}>
          <GrStatusGood />
          <span>Result</span>
        </div>
        <div className={cn(styles[`result__btn`])}>
          <Button use="run" text={`${isLoading ? "Loading..." : "Run Code"}`} handler={runCode} />
        </div>
      </div>
      <div className={cn(styles[`result__field`], isError ? styles[`result__field--error`] : "")}>
        {serverError ? (
          <div className={cn(styles[`sidebar__error`])}>
            <p>Error: {serverError}.</p>
            <p>Try again later.</p>
          </div>
        ) : output ? (
          output.map((line, i) => <p key={i}>{line}</p>)
        ) : (
          <span>Click "Run Code" to see the output here</span>
        )}
      </div>
    </div>
  );
}
