import React from "react";
import { IoIosSearch, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Search: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5">
      <form className="flex items-center justify-between w-full px-3 py-3 border border-gray-300 rounded-md gap-x-3 bg-inputBg">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder="Search for news.."
        />
        <IoIosSearch className="text-[25px]" />
      </form>

      <Link
        className="flex items-center px-6 py-3 transition-all border border-gray-300 rounded-md gap-x-4 whitespace-nowrap hover:bg-gray-200"
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
