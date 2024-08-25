import React from "react";
import NewsBlockItem from "./NewsBlockItem/NewsBlockItem";

const NewsBlock: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3 py-5">
      <NewsBlockItem />
      <NewsBlockItem />
      <NewsBlockItem />
      <NewsBlockItem />
    </div>
  );
};

export default NewsBlock;
