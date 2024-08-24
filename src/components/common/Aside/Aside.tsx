import React from "react";
import { Logo } from "../../../assets/svgs";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { Menu } from "../../../constants/constants";
import {
  MdOutlineBusinessCenter,
  MdOutlineHealthAndSafety,
  MdSportsMartialArts,
} from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import Subscribe from "../../ui/Subscribe";

const iconsMenu = [
  <IoHomeOutline className="text-[27px]" />,
  <BiWorld className="text-[27px]" />,
  <MdOutlineBusinessCenter className="text-[27px]" />,
  <MdOutlineHealthAndSafety className="text-[27px]" />,
  <MdSportsMartialArts className="text-[27px]" />,
  <GoCommentDiscussion className="text-[27px]" />,
];

const Aside: React.FC = () => {
  return (
    <aside className="flex flex-col justify-between gap-3 overflow-y-auto pb-4">
      <div>
        <Link
          className="mb-8 flex items-center gap-x-4 ps-8 pt-8 text-lg font-medium text-primaryDarker"
          to={"/"}
        >
          {" "}
          <Logo /> Aster News{" "}
        </Link>
        <nav>
          <ul className="flex flex-col gap-y-4">
            {Menu.map((item, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-x-4 py-3 ps-8 ${isActive ? "gap-x-4 rounded-r-full bg-activeLink font-medium text-primaryDarker" : ""}`
                  }
                  to={item.to}
                >
                  {iconsMenu[index]}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Subscribe />
    </aside>
  );
};

export default Aside;
