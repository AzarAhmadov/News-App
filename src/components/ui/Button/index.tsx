import React, { memo } from "react";
import classNames from "classnames";
import "./button.css";
import { TypeButton } from "../../../types/types";

const Button: React.FC<TypeButton> = ({
  children,
  type,
  rounded,
  size,
  width,
  outline,
}) => {
  return (
    <button
      className={classNames(
        {
          btn: true,
          "btn-rounded": rounded,
          "btn-outline": outline,
        },
        [`btn-${type}`, `btn-${size}`, `btn-${width}`],
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
