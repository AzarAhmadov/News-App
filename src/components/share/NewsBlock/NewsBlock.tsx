import React from "react";
import NewsBlockItem from "./NewsBlockItem/NewsBlockItem";
import { typeNewsBlock } from "../../../types/types";
import { useFetchAllNews } from "../../../hooks/useFetch";

const NewsBlock: React.FC<typeNewsBlock> = ({ title, icon }) => {
  const [data] = useFetchAllNews();

  return (
    <>
      <div className="mt-6 flex items-center gap-x-2">
        {icon}
        <h2 className="text-lg font-medium"> {title} </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 py-5">
        {data?.map((item: any, index: number) => (
          <NewsBlockItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default NewsBlock;
