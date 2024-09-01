import React from "react";
import { IoIosSearch, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Header: React.FC = () => {
  const token = false;

  return (
    <header className="flex items-center gap-x-5">
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

      {token ? (
        <div className="flex items-center gap-x-3 whitespace-nowrap">
          <figure className="size-[3rem] flex-shrink-0 overflow-hidden rounded-full">
            <img
              className="object-cover rounded-full size-full"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt=""
            />
          </figure>
          <h3>Azar Ahmadov</h3>
        </div>
      ) : (
        <Link
          className="flex items-center px-10 py-3 text-white rounded-md gap-x-2 bg-primaryDarker"
          to={""}
        >
          Login
          <MdLogin className="text-xl" />
        </Link>
      )}
    </header>
  );
};

export default Header;
