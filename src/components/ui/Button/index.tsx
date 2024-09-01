import React, { memo } from "react";
import classNames from "classnames";
import "./button.css";
import { TypeButton } from "../../../types/types";
import { useNavigate } from "react-router-dom";

const Button: React.FC<TypeButton> = ({
  children,
  variant,
  rounded,
  size,
  width,
  outline,
  type = "button",
  to,
  onClick = () => {},
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={() => handleClick()}
      className={classNames(
        {
          btn: true,
          "btn-rounded": rounded,
          "btn-outline": outline,
        },
        [`btn-${variant}`, `btn-${size}`, `btn-${width}`],
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
