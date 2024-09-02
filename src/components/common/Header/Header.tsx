import React from "react";
import { IoIosSearch, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { serviceSetToggleStatus } from "../../../services/app.service";
import { useStoreAuth } from "../../../store/features/auth.slice";
import { CiLogout } from "react-icons/ci";
import Dropdown from "../../ui/Dropdown";
import Theme from "../../ui/Theme";

const Header: React.FC = () => {
  const { token, user } = useStoreAuth();

  const Lagout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header className="flex items-center gap-x-5">
      <form className="flex items-center justify-between w-full px-3 py-3 border border-gray-300 rounded-md gap-x-3 bg-inputBg dark:border-gray-600 dark:bg-gray-800">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder="Search for news.."
        />
        <IoIosSearch className="text-[25px]" />
      </form>
      <Link
        className="flex items-center px-6 py-3 transition-all border border-gray-300 rounded-md gap-x-4 whitespace-nowrap hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        to={"/"}
      >
        <p className="flex gap-x-2">
          Latest news
          <span className="font-medium text-primaryDark">Around the World</span>
        </p>
        <IoIosArrowForward className="text-[20px]" />
      </Link>
      {token ? (
        <Dropdown
          DropdownHeader={
            <div className="flex items-center cursor-pointer gap-x-3 whitespace-nowrap">
              <figure className="size-[3rem] flex-shrink-0 overflow-hidden rounded-full p-1">
                <img
                  className="object-cover rounded-full size-full"
                  src={user?.photo}
                  alt={user?.name}
                />
              </figure>
              <h3>
                {user?.name}
                <span className="text-sm ms-1">{user?.surname}</span>
              </h3>
            </div>
          }
        >
          <div className="absolute -bottom-[3.3rem] left-0 w-full rounded-md bg-primaryDark p-3 text-center text-white">
            <button
              onClick={Lagout}
              className="mx-auto flex items-center justify-center gap-x-3 font-[500] text-white"
            >
              <CiLogout className="text-xl" /> Logout
            </button>
          </div>
        </Dropdown>
      ) : (
        <button
          className="flex items-center px-10 py-3 text-white rounded-md gap-x-2 bg-primaryDarker"
          onClick={serviceSetToggleStatus}
        >
          Login
          <MdLogin className="text-xl" />
        </button>
      )}

      <Theme />
    </header>
  );
};

export default Header;
