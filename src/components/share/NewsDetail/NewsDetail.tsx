import React from "react";
import { Link, useParams } from "react-router-dom";
import Comment from "../../ui/Comment";
import { useFetchNewsBySlug } from "../../../hooks/useFetch";
import moment from "moment";
import GoBack from "../../ui/GoBack";
import ErrorMsg from "../../ui/ErrorMsg";
import Spinner from "../../ui/Spinner";

const NewsDetail: React.FC = () => {
  const { slug } = useParams();

  const [data, loading] = useFetchNewsBySlug(slug);

  if (loading) {
    return <Spinner/>
  }

  if (data.length === 0) {
    return <ErrorMsg text="This news page is not available" />;
  }

  return (
    <>
      <div className="py-7">
        <GoBack />

        <h3 className="text-2xl text-black">{data?.title}</h3>
        <Link
          className="inline-flex px-4 py-1 mt-3 rounded-md bg-activeLink text-primaryDark"
          to={`/search?category=${data?.category?.slug}`}
        >
          {data?.category?.slug.charAt(0).toUpperCase() + data?.category?.slug.slice(1)}
        </Link>
      </div>

      <figure className="aspect-[16/8] overflow-hidden rounded-md">
        <img
          className="object-cover object-center size-full"
          src={data?.photo}
          alt=""
        />
      </figure>

      <div
        className="mt-7"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>

      <div className="pb-5 mb-5 text-center border-b border-gray-200 mt-7">
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
