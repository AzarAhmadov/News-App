import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { TypeErrorMsg } from "../../../types/types";

const ErrorMsg: React.FC<TypeErrorMsg> = ({ text }) => {
  return (
    <div className="flex flex-col items-center pt-10">
      <img
        className="size-[6rem] object-contain"
        src="https://cdn-icons-png.flaticon.com/128/12870/12870509.png"
        alt=""
      />
      <p className="mt-5 text-xl">{text}</p>
      <Link
        to={"/"}
        className="mt-5 flex items-center gap-x-3 rounded-md bg-black px-4 py-2 text-white"
      >
        <FaArrowLeft />
        Geri dön
      </Link>
    </div>
  );
};

export default ErrorMsg;
