import classNames from "classnames";
import React from "react";

const FormInput: React.FC<any> = ({
  value,
  password = false,
  onChange = () => {},
  className,
  ...props
}) => {
  return (
    <input
      type={password ? "password" : "text"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={classNames([
        className || "",
        {
          "form-element": true,
        },
      ])}
      {...props}
    />
  );
};

export default FormInput;
