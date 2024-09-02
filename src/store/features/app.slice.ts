import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../app.store";

interface IinitialState {
  toggle: boolean;
  errors: any;
}

const initialState: IinitialState = {
  toggle: false,
  errors: {},
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
  },
});

export const { setToggle, setErrors } = AppSlice.actions;

export const useStoreApp = () =>
  useSelector((state: RootState) => state.AppStore);

export default AppSlice.reducer;
