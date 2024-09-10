import React, { memo } from "react";
import AsideLink from "../../../common/Aside/AsideLink";
import NewsBlockItem from "../../../share/NewsBlock/NewsBlockItem/NewsBlockItem";

const SkeletonArea: React.FC<any> = ({
  loading = false,
  children,
  count,
  type,
}) => {
  const skeleton_array = Array.from(Array(count).keys());

  if (!loading) return children;

  return (
    <>
      {skeleton_array.map((index) => (
        <div key={index}>
          {type === "category" && <AsideLink skeleton={true} />}
          {type === "newsItem" && <NewsBlockItem skeleton={true} />}
        </div>
      ))}
    </>
  );
};

export default memo(SkeletonArea);
