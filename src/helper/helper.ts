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

export const translate = (name: string) => {
  const key = name.split(".");

  const { language } = store.getState().AppStore;

  const langauges = {
    az: langAz,
    en: langEn,
  };

  let current_langauge = langauges[language];

  for (let k of key) {
    if (current_langauge[k]) {
      current_langauge = current_langauge[k];
    } else {
      current_langauge = name;
    }
  }

  return current_langauge;
};