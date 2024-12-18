import cn from "classnames";
import styles from "./codeArea.module.scss";
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { snippets } from "../../../mockData";

export default function CodeArea({ theme, handleGetValue }) {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");

  const onMountAction = (editor) => {
    editorRef.current = editor;
    // console.log(editorRef.current);
    editor.focus();
  };

  const handleGetlanguage = (lang) => {
    setLanguage(lang);
    setValue(snippets[lang]);
  };

  useEffect(() => {
    handleGetValue({ code: editorRef, language: language });
  }, [language, editorRef]);

  return (
    <div className={cn(styles[`code-area`])}>
      <div className={cn(styles[`code-area__top`])}>
        <RiCodeSSlashLine />
        <span>Code</span>
      </div>
      <div className={cn(styles[`code-area__language-selector`])}>
        <LanguageSelector handleGetlanguage={handleGetlanguage} />
      </div>
      <div className={cn(styles[`code-area__field`])}>
        <Editor
          height="60vh"
          theme={theme === "light" ? "vs-light" : "vs-dark"}
          language={language}
          defaultValue="// some comment"
          onMount={onMountAction}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
}
