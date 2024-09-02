import React from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Spinner from "../../components/ui/Spinner";
import { useFetchNewsBySlug } from "../../hooks/useFetch";
import ErrorMsg from "../../components/ui/ErrorMsg";
import GoBack from "../../components/ui/GoBack";
import Comment from "../../components/ui/Comment";

const NewsDetail: React.FC = () => {
  const { slug } = useParams();

  const [data, loading] = useFetchNewsBySlug(slug);

  if (loading) {
    return <Spinner />;
  }

  if (data.length === 0) {
    return <ErrorMsg text="This news page is not available" />;
  }

  return (
    <>
      <div className="py-7">
        <GoBack />

        <h3 className="text-2xl text-black dark:text-white">{data?.title}</h3>
        <Link
          className="inline-flex px-4 py-1 mt-3 rounded-md dark:bg-gray-700 dark:text-white bg-activeLink text-primaryDark"
          to={`/search?category=${data?.category?.slug}`}
        >
          {data?.category?.name}
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

      <div className="pb-5 mb-5 text-center border-b border-gray-200 dark:border-gray-700 mt-7">
        <h3 className="mb-2 text-paragraphColor">
          {moment(data?.published_date, "YYYYMMDD").fromNow()}
        </h3>
        <Link to={""}>by {data?.author?.fullname}</Link>
      </div>
      <Comment />
    </>
  );
};

export default NewsDetail;
