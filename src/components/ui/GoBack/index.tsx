import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const GoBack: React.FC = () => {
  return (
    <Link
      className="flex p-2 px-4 mb-5 text-white bg-black rounded-md dark:bg-blue-400 w-max"
      to={"/"}
    >
      <FaArrowLeft />
    </Link>
  );
};

export default GoBack;
