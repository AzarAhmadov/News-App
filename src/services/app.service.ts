import { store } from "../store/app.store";
import { setDarkMode, setErrors, setToggle } from "../store/features/app.slice";
import { setToken, setUser } from "../store/features/auth.slice";

export const serviceSetToggleStatus = () => {
  store.dispatch(setToggle());
};

export const serviceSetToken = (value: string) => {
  store.dispatch(setToken(value));
};

export const serviceSetUser = (value: string) => {
  store.dispatch(setUser(value));
  window.location.reload();
};

export const serviceSetErrors = (value: string) => {
  store.dispatch(setErrors(value));
};

export const serviceSetDarkmode = (value: any) => {
  store.dispatch(setDarkMode(value));
};
