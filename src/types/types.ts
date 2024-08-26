import { ReactElement, ReactNode } from "react";

export type TypeButton = {
  children: ReactNode;
  type: string;
  rounded: boolean;
  size: string;
  width?: string;
  outline?: boolean;
  to?: string;
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
