import React from "react";
import { Link } from "react-router-dom";
import { TextFirstLineUpperCase } from "../../../helper/helper";
import { FiGlobe } from "react-icons/fi";
import { LuUserSquare2 } from "react-icons/lu";
import {
  MdOutlineAgriculture,
  MdOutlineHealthAndSafety,
  MdSportsMartialArts,
} from "react-icons/md";
import { TbDeviceDesktop } from "react-icons/tb";
import { IoBarChartOutline, IoGameControllerOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { AiOutlineEnvironment } from "react-icons/ai";

type IconTemplateProps = {
  slug: keyof IconTemplate;
};

type IconTemplate = {
  world: JSX.Element;
  politics: JSX.Element;
  sports: JSX.Element;
  technology: JSX.Element;
  economy: JSX.Element;
  entertainment: JSX.Element;
  health: JSX.Element;
  science: JSX.Element;
  culture: JSX.Element;
  environment: JSX.Element;
};

const IconTemplate: React.FC<IconTemplateProps> = ({ slug }) => {
  const icons: IconTemplate = {
    world: <FiGlobe className="text-xl" />,
    politics: <LuUserSquare2 className="text-xl" />,
    sports: <MdSportsMartialArts className="text-xl" />,
    technology: <TbDeviceDesktop className="text-xl" />,
    economy: <IoBarChartOutline className="text-xl" />,
    entertainment: <IoGameControllerOutline className="text-xl" />,
    health: <MdOutlineHealthAndSafety className="text-xl" />,
    science: <GiMaterialsScience className="text-xl" />,
    culture: <MdOutlineAgriculture className="text-xl" />,
    environment: <AiOutlineEnvironment className="text-xl" />,
  };

  return icons[slug];
};

const AsideLink: React.FC<any> = ({ item, category }) => {
  return (
    <li>
      <Link
        className={`flex items-center gap-x-4 py-3 ps-8 transition-all ${
          item.slug === category &&
          "rounded-r-full bg-activeLink font-medium text-primaryDarker"
        }`}
        to={`search?category=${item.slug}`}
      >
        <span>
          <IconTemplate slug={item.slug} />
        </span>
        {TextFirstLineUpperCase(item.slug)}
      </Link>
    </li>
  );
};

export default AsideLink;
