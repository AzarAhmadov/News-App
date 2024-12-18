import React from "react";
import { Link } from "react-router-dom";
import {
  DescriptionSkeleton,
  ImageSkeleton,
  InfoSkeleton,
  TitleSkeleton,
} from "../../../ui/Skeleton/SkeletonContent";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./NewsBlockItem.css";

const NewsBlockItem: React.FC<any> = ({ item, skeleton = false }) => {
  return (
    <article className="p-5 transition-all bg-white border rounded-md shadow-sm hover:scale-105 dark:border-gray-300/10 dark:bg-gray-800">
      <div className="relative flex justify-between gap-x-4">
        <div className="w-full">
          <h3 className="text-sm font-medium leading-5 md:leading-7 line-clamp-2 md:text-lg text-amberBlack dark:text-white">
            {skeleton ? <TitleSkeleton /> : item?.title}
          </h3>
          <div className="mt-2 text-[12px] md:text-sm font-normal leading-5 md:leading-6 line-clamp-3 text-paragraphColor dark:text-white/50">
            {skeleton ? <DescriptionSkeleton /> : item?.description}
          </div>
        </div>
        <div>
          {skeleton ? (
            <ImageSkeleton />
          ) : (
            <figure className="aspect-[1/1] h-[110px] md:h-[132px] shrink-0 overflow-hidden rounded-[4px]">
              <LazyLoadImage
                src={item?.photo}
                effect="blur"
                alt={item?.author.fullname}
              />
            </figure>
          )}
        </div>
        <Link to={`/detail/${item?.slug}`} className="absolute inset-0" />
      </div>
      <ul className="flex justify-between mt-5">
        {skeleton ? (
          <InfoSkeleton />
        ) : (
          <li className="flex items-center gap-x-2 text-[0.813rem] text-infoText">
            <span>{item?.author?.agency}</span>
            <span>●</span>
            <span>{moment(item?.published_date, "YYYYMMDD").fromNow()}</span>
          </li>
        )}
      </ul>
    </article>
  );
};

export default NewsBlockItem;
