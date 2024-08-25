import React from "react";
import NewsBlockItem from "./NewsBlockItem/NewsBlockItem";
import { typeNewsBlock } from "../../../types/types";

const NewsBlock: React.FC<typeNewsBlock> = ({
  title = "Around the world",
  icon,
}) => {
  return (
    <>
      <div className="flex items-center mt-6 gap-x-2">
        {icon}
        <h2 className="text-lg font-medium"> {title} </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 py-5">
        <NewsBlockItem />
        <NewsBlockItem />
        <NewsBlockItem />
        <NewsBlockItem />
      </div>
    </>
  );
};

export default NewsBlock;
