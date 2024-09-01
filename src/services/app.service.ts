import { store } from "../store/app.store";
import { setToggle } from "../store/features/app.slice";
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

