import React, { useEffect, useState } from "react";
import NewsBlockItem from "./NewsBlockItem/NewsBlockItem";
import { typeNewsBlock } from "../../../types/types";
import { useFetchAllNews } from "../../../hooks/useFetch";
import LoadMore from "../../ui/LoadMore";
import SkeletonArea from "../../ui/Skeleton/SkeletonArea";
import { language, translate } from "../../../helper/helper";

const NewsBlock: React.FC<typeNewsBlock> = ({ title, icon }) => {
  const [page, setPage] = useState(1);
  const newsLimit = 10;
  const [data, loading] = useFetchAllNews(page, newsLimit);
  const [newsData, setNewsData] = useState<any[]>([]);
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
      <div className="flex items-center mt-6 gap-x-2">
        {icon}
        <h2 className="text-lg font-medium"> {title} </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 py-5">
        {
          <SkeletonArea count={newsLimit} type="newsItem" loading={loading}>
            {newsData?.map((item, index: number) => (
              <NewsBlockItem loading={loading} item={item} key={index} />
            ))}
          </SkeletonArea>
        }
      </div>
      {hasMoreData && <LoadMore handlePage={handlePage} />}
    </>
  );
};

export default NewsBlock;
