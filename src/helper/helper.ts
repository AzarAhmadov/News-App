import { toast } from "react-toastify";
import langAz from "../locales/az.json";
import langEn from "../locales/en.json";
import { store } from "../store/app.store";

export const TextFirstLineUpperCase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};

export const notification = (
  type: "success" | "error" | "info" | "warning",
  message: string,
) => {
  toast[type](message);
};

type LanguageKeys = {
  [key: string]: string | LanguageKeys;
};

export const translate = (name: string): string => {
  const key = name.split(".");

  const { language } = store.getState().AppStore;

  const languages: { [key: string]: LanguageKeys } = {
    az: langAz,
    en: langEn,
  };

  let current_language: LanguageKeys = languages[language];

  for (let k of key) {
    if (
      current_language &&
      typeof current_language === "object" &&
      k in current_language
    ) {
      current_language = current_language[k] as LanguageKeys;
    } else {
      return name;
    }
  }

  if (typeof current_language === "string") {
    return current_language;
  }

  return name;
};
