import React from "react";
import { Logo } from "../../../assets/svgs";
import { Link, useSearchParams } from "react-router-dom";
import Subscribe from "../../ui/Subscribe";
import { useFetchCategories } from "../../../hooks/useFetch";
import AsideLink from "./AsideLink";
import SkeletonArea from "../../ui/Skeleton/SkeletonArea";

const Aside: React.FC = () => {
  const [categories, loading] = useFetchCategories();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const RenderNavbar = () => {
    return (
      <ul className="flex flex-col gap-y-4">
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
      <div className="fixed z-10 flex h-screen flex-col justify-between gap-3 overflow-y-auto pb-6 pe-2">
        <div>
          <Link
            className="mb-8 flex items-center gap-x-4 ps-8 pt-3 text-lg font-medium text-primaryDarker"
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
