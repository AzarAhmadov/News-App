import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../app.store";

interface IinitialState {
  toggle: boolean;
  darkMode: any;
  errors: any;
  language: string;
  languages: string[];
}

const initialState: IinitialState = {
  toggle: false,
  errors: {},
  darkMode: localStorage.getItem("darkMode")
    ? localStorage.getItem("darkMode") === "true"
    : null,
  languages: ["az", "en"],
  language: localStorage.getItem("language") || "az",
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode", state.darkMode);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", state.language);
    },
  },
});

export const { setToggle, setErrors, setDarkMode, setLanguage } =
  AppSlice.actions;

export const useStoreApp = () =>
  useSelector((state: RootState) => state.AppStore);

export default AppSlice.reducer;
