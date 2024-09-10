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

  const current_langauge = language;

  const langauges = {
    az: langAz,
    en: langEn,
  };

  let result = langauges[current_langauge];

  for (let k of key) {
    if (result[k] !== undefined) {
      result = result[k];
    } else {
      result = name;
    }
  }

  return result;
};
