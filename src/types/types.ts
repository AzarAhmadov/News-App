import { ReactElement, ReactNode } from "react";

export type TypeButton = {
  children: ReactNode;
  type: "submit" | "button";
  rounded: boolean;
  size: string;
  width?: string;
  outline?: boolean;
  to?: string;
  onClick?: () => void;
  variant: string;
  disabled?: boolean;
};

export type typeSlider = {
  children: ReactNode;
  title: string;
  icon: ReactElement;
};

export type typeNewsBlock = {
  title: string;
  icon: ReactElement;
};

export type TypeErrorMsg = {
  text: string;
};

export type TypeLoadMore = {
  handlePage: () => void;
};

export type TypeAside = {
  handleClose?: () => void;
};

export type TypeSeo = {
  title?: string;
  description?: string;
  image?: string;
};
