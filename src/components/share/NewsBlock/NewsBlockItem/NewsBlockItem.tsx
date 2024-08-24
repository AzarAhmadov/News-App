import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsBlockItem: React.FC = () => {
  return (
    <article className="p-5 transition-all bg-white border border-gray-200 rounded-md shadow-sm hover:scale-105">
      <div className="relative flex gap-x-4">
        <div>
          <h3 className="text-lg font-medium leading-7 line-clamp-2 text-amberBlack">
            Battlegrounds Mobile India iOS release date
          </h3>
          <p className="mt-2 text-sm font-normal leading-6 text-paragraphColor line-clamp-3">
            The reason behind their disappointment is that iPhone users have
            been..
          </p>
        </div>
        <div>
          <figure className="aspect-[1/1] h-[132px] shrink-0 overflow-hidden rounded-[4px]">
            <img
              className="object-cover size-full"
              src="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-back-view-of-atlantic-puffin-on-rock.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
          </figure>
        </div>
        <Link to={""}  className="absolute inset-0"/>
      </div>
      <ul className="flex justify-between mt-5">
        <li className="flex items-center text-sm text-infoText gap-x-2">
          <span>Sport Biz</span>
          <span>●</span>
          <span>15 mins ago</span>
        </li>
        <li className="flex text-sm gap-x-4">
          <button className="flex items-center gap-x-2">
            <AiOutlineShareAlt />
            Share
          </button>

          <button className="flex items-center gap-x-2">
            <MdOutlineWatchLater />
            Read Later
          </button>
        </li>
      </ul>
    </article>
  );
};

export default NewsBlockItem;
