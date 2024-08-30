import React from "react";
import { Logo } from "../../../assets/svgs";
import { Link, useSearchParams } from "react-router-dom";
import Subscribe from "../../ui/Subscribe";
import { useFetchCategories } from "../../../hooks/useFetch";
import AsideLink from "./AsideLink";
import SkeletonLoad from "../../ui/SkeletonLoad";

const Aside: React.FC = () => {
  const [categories, loading] = useFetchCategories();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const RenderNavbar = () => {
    return (
      <>
        {loading ? (
          <SkeletonLoad
            count={10}
            className="mb-4 h-[42px] w-full !rounded-r-full last:mb-0"
          />
        ) : (
          <ul className="flex flex-col gap-y-4">
            {categories?.map((item: any, index: number) => (
              <AsideLink
                key={index}
                item={item}
                loading={loading}
                category={category}
              />
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <aside>
      <div className="fixed z-10 flex flex-col justify-between h-screen gap-3 pb-6 overflow-y-auto pe-2">
        <div>
          <Link
            className="flex items-center pt-3 mb-8 text-lg font-medium gap-x-4 ps-8 text-primaryDarker"
            to={"/"}
          >
            <Logo /> Aster News
          </Link>
          <nav>{RenderNavbar()}</nav>
        </div>
        <Subscribe />
      </div>
    </aside>
  );
};

export default Aside;
