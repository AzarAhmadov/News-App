import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { serviceSetToggleStatus } from "../../../services/app.service";
import { useStoreAuth } from "../../../store/features/auth.slice";
import { CiLogout } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import Theme from "../Theme";
import Language from "../Language";
import Dropdown from "../../ui/Dropdown";
import { translate } from "../../../helper/helper";
import useWidth from "../../../hooks/useWidth";
import Aside from "../Aside/Aside";

const Header: React.FC = () => {
  const { token, user } = useStoreAuth();
  const width = useWidth();

  const Lagout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [nav, setNav] = useState(false);

  const handleClose = () => {
    setNav((prev) => !prev);
  };

  return (
    <>
      <header className="flex items-center justify-between gap-x-5">
        {/* <form className="flex items-center justify-between w-full px-3 py-3 border border-gray-300 rounded-md gap-x-3 bg-inputBg dark:border-gray-600 dark:bg-gray-800">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder={translate("form.input")}
        />
        <IoIosSearch className="text-[25px]" />
      </form> */}
        {width > 992 ? (
          <Link
            className="flex items-center gap-x-4 whitespace-nowrap rounded-md border border-gray-300 px-6 py-3 transition-all hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            to={"/"}
          >
            <p className="flex gap-x-2">{translate("header.text")}</p>
            <IoIosArrowForward className="text-[20px]" />
          </Link>
        ) : (
          <FaBars onClick={() => setNav(!nav)} className="size-[25px]" />
        )}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          {token ? (
            <Dropdown
              DropdownHeader={
                <div className="flex cursor-pointer items-center gap-x-3 whitespace-nowrap">
                  <figure className="size-[3rem] flex-shrink-0 overflow-hidden rounded-full p-1">
                    <img
                      className="size-full rounded-full object-cover"
                      src={user?.photo}
                      alt={user?.name}
                    />
                  </figure>
                  <h3>
                    {user?.name}
                    <span className="ms-1 text-sm">{user?.surname}</span>
                  </h3>
                </div>
              }
            >
              <div className="absolute -bottom-[3.3rem] left-0 w-full rounded-md bg-primaryDark p-3 text-center text-white">
                <button
                  onClick={Lagout}
                  className="mx-auto flex items-center justify-center gap-x-3 font-[500] text-white"
                >
                  <CiLogout className="text-xl" /> {translate("auth.logout")}
                </button>
              </div>
            </Dropdown>
          ) : (
            <button
              className="flex items-center gap-x-2 whitespace-nowrap rounded-md bg-primaryDarker px-6 py-2 text-white md:px-10 md:py-3"
              onClick={serviceSetToggleStatus}
            >
              {translate("auth.login")}
              <MdLogin className="text-xl" />
            </button>
          )}

          <Language />
          <Theme />
        </div>
      </header>

      {nav && <Aside handleClose={handleClose} />}
    </>
  );
};

export default Header;
