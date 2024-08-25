import React from "react";
import { IoIosSearch, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Search: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5">
      <form className="flex w-full items-center justify-between gap-x-3 rounded-md border border-gray-300 bg-inputBg px-3 py-3">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder="Search for news.."
        />
        <IoIosSearch className="text-[25px]" />
      </form>

      <Link
        className="flex items-center gap-x-4 whitespace-nowrap rounded-md border border-gray-300 px-6 py-3 transition-all hover:bg-gray-200"
        to={"/"}
      >
        <p className="flex gap-x-2">
          Latest news
          <span className="font-medium text-primaryDark">Around the World</span>
        </p>
        <IoIosArrowForward className="text-[20px]" />
      </Link>
    </div>
  );
};

export default Search;
