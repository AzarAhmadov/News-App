import { toast } from "react-toastify";

export const TextFirstLineUpperCase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};

export const notification = (type: string, message: string) => {
  toast[type](message);
};
