import React, { useEffect, useState } from "react";
import NewsBlockItem from "./NewsBlockItem/NewsBlockItem";
import { typeNewsBlock } from "../../../types/types";
import { useFetchAllNews } from "../../../hooks/useFetch";
import LoadMore from "../../ui/LoadMore";

const NewsBlock: React.FC<typeNewsBlock> = ({ title, icon }) => {
  const [page, setPage] = useState(1);
  const newsLimit = 10;
  const [data] = useFetchAllNews(page, newsLimit);
  const [newsData, setNewsData] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);

  const handlePage = () => {
    setPage((p) => p + 1);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setNewsData((prevNewsData) => [...prevNewsData, ...data]);
      if (data.length < newsLimit) {
        setHasMoreData(false);
      }
    }
  }, [data]);

  return (
    <>
      <div className="mt-6 flex items-center gap-x-2">
        {icon}
        <h2 className="text-lg font-medium"> {title} </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 py-5">
        {newsData?.map((item: any, index: number) => (
          <NewsBlockItem item={item} key={index} />
        ))}
      </div>
      {hasMoreData && <LoadMore handlePage={handlePage} />}
    </>
  );
};

export default NewsBlock;
