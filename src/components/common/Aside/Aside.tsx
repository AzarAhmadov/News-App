import React, { memo } from "react";
import { Logo } from "../../../assets/svgs";
import { Link, useSearchParams } from "react-router-dom";
import Subscribe from "../../ui/Subscribe";
import { useFetchCategories } from "../../../hooks/useFetch";
import AsideLink from "./AsideLink";
import SkeletonArea from "../../ui/Skeleton/SkeletonArea";
import useWidth from "../../../hooks/useWidth";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TypeAside } from "../../../types/types";

const Aside: React.FC<TypeAside> = ({ handleClose }) => {
  const [categories, loading] = useFetchCategories();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const width = useWidth();

  const RenderNavbar = () => {
    return (
      <ul onClick={handleClose} className="flex flex-col gap-y-4">
        <SkeletonArea count={10} type="category" loading={loading}>
          {categories?.map((item: any, index: number) => (
            <AsideLink
              key={index}
              loading={loading}
              item={item}
              category={category}
            />
          ))}
        </SkeletonArea>
      </ul>
    );
  };

  return (
    <aside>
      <div
        className={`${width < 992 && "left-0 w-[80%] bg-white pr-6 dark:bg-[#000000e1]"} fixed top-0 z-10 flex h-screen flex-col justify-between gap-3 overflow-y-auto pb-3 pe-2`}
      >
        <div>
          <Link
            className="flex items-center pt-3 mb-8 text-lg font-medium gap-x-4 ps-8 text-primaryDarker dark:text-white"
            to={"/"}
          >
            <Logo /> Aster News
          </Link>
          <nav>{RenderNavbar()}</nav>
        </div>
        <Subscribe />

        {width < 992 && (
          <IoIosCloseCircleOutline
            onClick={handleClose}
            className="absolute right-3 top-[15px] size-[30px] text-black dark:text-white"
          />
        )}
      </div>
    </aside>
  );
};

export default memo(Aside);
