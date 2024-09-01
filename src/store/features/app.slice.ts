import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../app.store";

interface IinitialState {
  toggle: boolean;
}

const initialState: IinitialState = {
  toggle: false,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setToggle } = AppSlice.actions;

export const useStoreApp = () =>
  useSelector((state: RootState) => state.AppStore);

export default AppSlice.reducer;
