import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../../../ui/Button";
import { serviceAuthLogin } from "../../../../services/auth.service";
import { useStoreApp } from "../../../../store/features/app.slice";
import classNames from "classnames";
import { serviceSetToggleStatus } from "../../../../services/app.service";

const Modal: React.FC = () => {
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

  const { toggle } = useStoreApp();

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggle]);

  return (
    <div
      className={classNames({
        "visible fixed inset-0 z-10 grid h-auto scale-100 place-items-center p-1 opacity-100 backdrop-blur-sm transition-all duration-200":
          toggle,
        "invisible scale-75 opacity-0 h-0": !toggle,
      })}
    >
      <div className="w-full max-w-[450px] rounded-md border border-gray-200 bg-white">
        <div className="flex items-center justify-between p-5 border-b">
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
                className="p-2 mt-2 border rounded-md outline-none border-gray-400/40"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChnage}
                value={inputs.password}
                name="password"
                className="p-2 mt-2 border rounded-md outline-none border-gray-400/40"
                type="password"
                id="password"
              />
            </div>
            <Button
              size="sm"
              type="submit"
              variant="black"
              rounded={true}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;