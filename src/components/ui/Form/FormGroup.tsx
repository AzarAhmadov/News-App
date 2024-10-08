import classNames from "classnames";
import React from "react";
import { useStoreApp } from "../../../store/features/app.slice";

const FormGroup: React.FC<any> = ({
  label,
  required = false,
  children,
  errorMessage = false,
  error = false,
}) => {
  const { errors } = useStoreApp();

  return (
    <div
      className={classNames({
        "form-group": true,
        "form-group-error": errors[error] || errorMessage,
      })}
    >
      {label && (
        <label className="form-label">
          <span>
            {label} {required && <span className="text-red-500">*</span>}
          </span>
        </label>
      )}

      {children}

      {(errors[error] || errorMessage) && (
        <p className="form-error">{errors[error] || errorMessage}</p>
      )}
    </div>
  );
};

export default FormGroup;
