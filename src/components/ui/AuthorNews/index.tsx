import React, { memo } from "react";
import NewsBlockItem from "../../share/NewsBlock/NewsBlockItem/NewsBlockItem";

const AuthorNews: React.FC<any> = ({ authorAllNewsData }) => {
  return (
    <div className="grid grid-cols-1 gap-3 pb-4 md:grid-cols-2 xl:grid-cols-3">
      {authorAllNewsData?.data?.map((item: any, index: number) => (
        <NewsBlockItem item={item} key={index} />
      ))}
    </div>
  );
};

export default memo(AuthorNews);
