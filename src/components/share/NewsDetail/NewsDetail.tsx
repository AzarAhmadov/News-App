import React from "react";
import { Link, useParams } from "react-router-dom";
import Comment from "../../ui/Comment";
import { FaArrowLeft } from "react-icons/fa";
import { useFetchNewsBySlug } from "../../../hooks/useFetch";
import moment from "moment";

const NewsDetail: React.FC = () => {
  const { slug } = useParams();

  const [data] = useFetchNewsBySlug(slug);

  return (
    <>
      <div className="py-7">
        <Link
          className="mb-5 flex w-max rounded-md bg-black p-2 px-4 text-white"
          to={"/"}
        >
          <FaArrowLeft />
        </Link>

        <h3 className="text-2xl text-black">{data?.title}</h3>
        <Link
          className="mt-3 inline-flex rounded-md bg-activeLink px-4 py-1 text-primaryDark"
          to={`/search?category=${data?.category?.slug}`}
        >
          {data?.category?.name}
        </Link>
      </div>

      <figure className="aspect-[16/8] overflow-hidden rounded-md">
        <img
          className="size-full object-cover object-center"
          src={data?.photo}
          alt=""
        />
      </figure>

      <div
        className="mt-7"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>

      <div className="mb-5 mt-7 border-b border-gray-200 pb-5 text-center">
        <h3 className="mb-2 text-paragraphColor">
          {moment(data?.published_date, "YYYYMMDD").fromNow()}
        </h3>
        <Link to={""}>by {data.author?.fullname}</Link>
      </div>
      <Comment />
    </>
  );
};

export default NewsDetail;
