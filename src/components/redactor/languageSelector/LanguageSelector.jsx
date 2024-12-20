import cn from "classnames";
import styles from "./languageSelector.module.scss";
import Selector from "../../ui/selector/Selector";
import { useEffect, useState } from "react";
import { languages } from "../../../mockData";

export default function LanguageSelector({ handleGetlanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const getLanguage = (lang) => {
    setSelectedLanguage(lang);
  };

  useEffect(() => {
    handleGetlanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className={cn(styles[`language-selector`])}>
      <div className={cn(styles[`language-selector__selector-wrapper`])}>
        <Selector title="Languages:" options={languages} handler={getLanguage} />
      </div>
      <span className={cn(styles[`language-selector__selected`])}>{selectedLanguage}</span>
    </div>
  );
}
