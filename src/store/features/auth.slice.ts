import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../app.store";

interface IUser {
  photo: string;
  name: string;
  surname: string;
}

interface IinitialState {
  user: IUser | null;
  token: string;
}

const initialState: IinitialState = {
  token: localStorage.getItem("token") || "",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", state.token);
    },
  },
});

export const { setUser, setToken } = AuthSlice.actions;

export const useStoreAuth = () =>
  useSelector((state: RootState) => state.AuthStore);

export default AuthSlice.reducer;
