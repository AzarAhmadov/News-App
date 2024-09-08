import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../../../ui/Button";
import { serviceAuthLogin } from "../../../../services/auth.service";
import classNames from "classnames";
import { serviceSetToggleStatus } from "../../../../services/app.service";
import { useStoreApp } from "../../../../store/features/app.slice";

const Login: React.FC = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChnage = (e: any) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    serviceAuthLogin(inputs);
  };

  const { toggle, errors } = useStoreApp();

  if (toggle) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div
      className={classNames(
        "fixed inset-0 z-10 grid h-screen w-full place-items-center backdrop-blur-sm transition-all duration-300",
        {
          "visible scale-100 opacity-100": toggle,
          "invisible scale-90 opacity-0": !toggle,
        },
      )}
    >
      <div className="w-full max-w-[450px] rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="flex items-center justify-between p-5 border-b dark:border-gray-600">
          <h4 className="text-xl">Login</h4>
          <IoMdClose
            onClick={serviceSetToggleStatus}
            className="cursor-pointer text-[1.5rem]"
          />
        </div>
        <div className="py-7 pe-5 ps-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <div className="flex flex-col mb-2">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChnage}
                value={inputs.email}
                name="email"
                className={`mt-2 rounded-md border border-gray-400/40 p-2 outline-none dark:bg-gray-800 ${errors?.email ? "border-red-600" : "border-gray-400/40"}`}
                type="email"
                id="email"
              />
              {errors.email && (
                <span className="mt-1 text-red-500">{errors?.email}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChnage}
                value={inputs.password}
                name="password"
                className={`mt-2 rounded-md border border-gray-400/40 p-2 outline-none dark:bg-gray-800 ${errors?.password ? "border-red-600" : "border-gray-400/40"}`}
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="mt-1 text-red-500">{errors?.password}</span>
              )}
            </div>
            <Button size="sm" type="submit" variant="black" rounded={true}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
