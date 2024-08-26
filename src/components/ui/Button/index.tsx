import React, { memo } from "react";
import classNames from "classnames";
import "./button.css";
import { TypeButton } from "../../../types/types";
import { Navigate, useNavigate } from "react-router-dom";

const Button: React.FC<TypeButton> = ({
  children,
  type,
  rounded,
  size,
  width,
  outline,
  to,
}) => {
  const navigate = useNavigate();
  
  const GetAuthorsDetail = () => {
    navigate(to);
  };

  return (
    <button
      onClick={() => (to ? GetAuthorsDetail() : null)}
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
