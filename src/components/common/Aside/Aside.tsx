import React from "react";
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
import { Logo } from "../../../assets/svgs";
import { Link, useSearchParams } from "react-router-dom";
import Subscribe from "../../ui/Subscribe";
import { useFetchCategories } from "../../../hooks/useFetch";

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

const Aside: React.FC = () => {
  const [categories] = useFetchCategories();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <aside>
      <div className="fixed z-10 flex flex-col justify-between h-screen gap-3 pb-6 overflow-y-auto">
        <div>
          <Link
            className="flex items-center pt-3 mb-8 text-lg font-medium gap-x-4 ps-8 text-primaryDarker"
            to={"/"}
          >
            <Logo /> Aster News
          </Link>
          <nav>
            <ul className="flex flex-col gap-y-4">
              {categories?.map((item: any, index: number) => (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-x-4 py-3 ps-8 transition-all ${item.slug === category ? "rounded-r-full bg-activeLink font-medium text-primaryDarker" : ""}`}
                    to={`search?category=${item.slug}`}
                  >
                    <IconTemplate slug={item.slug} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Subscribe />
      </div>
    </aside>
  );
};

export default Aside;
