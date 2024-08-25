import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";

const NewsBlockItem: React.FC<any> = ({ item }) => {
  return (
    <article className="p-5 transition-all bg-white border border-gray-200 rounded-md shadow-sm hover:scale-105">
      <div className="relative flex gap-x-4">
        <div>
          <h3 className="text-lg font-medium leading-7 line-clamp-2 text-amberBlack">
            {item.title}
          </h3>
          <p className="mt-2 text-sm font-normal leading-6 line-clamp-3 text-paragraphColor">
            {item.description}
          </p>
        </div>
        <div>
          <figure className="aspect-[1/1] h-[132px] shrink-0 overflow-hidden rounded-[4px]">
            <img
              className="object-cover size-full"
              src={item.photo}
              alt={item.author.fullname}
            />
          </figure>
        </div>
        <Link to={`/detail/${item.slug}`} className="absolute inset-0" />
      </div>
      <ul className="flex justify-between mt-5">
        <li className="flex items-center gap-x-2 text-[0.813rem] text-infoText">
          <span>{item.author.agency}</span>
          <span>●</span>
          <span>
            {moment(item.published_date, "YYYYMMDD").fromNow()}
          </span>
        </li>
        <li className="flex gap-x-3 text-[0.813rem]">
          <button className="flex items-center gap-x-2">
            <AiOutlineShareAlt />
            Share
          </button>
        </li>
      </ul>
    </article>
  );
};

export default NewsBlockItem;
