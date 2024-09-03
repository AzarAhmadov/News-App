import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import {
  useFetchAuthorBySlug,
  useFetchNewsAuthorBySlug,
} from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import AuthorNews from "../AuthorNews";
import GoBack from "../GoBack";
import ErrorMsg from "../ErrorMsg";
import Spinner from "../Spinner";

const Author: React.FC = () => {
  const { slug } = useParams();
  const [autorSlugData, loading] = useFetchAuthorBySlug(slug);
  const [authorAllNewsData] = useFetchNewsAuthorBySlug(slug, 8);

  if (loading) {
    return <Spinner />;
  }

  if (!autorSlugData) {
    return (
      <ErrorMsg text="The author you are looking for is not available..." />
    );
  }

  return (
    <>
      <div className="mt-5">
        <GoBack />
      </div>
      <div className="flex items-center justify-between px-5 py-3 my-4 bg-white border rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-800">
        <div className="flex items-center gap-x-3">
          <figure className="size-[4.5rem] overflow-hidden rounded-full border border-primaryDarker/30 p-1">
            <img
              className="object-cover rounded-full size-full"
              src={autorSlugData?.photo}
              alt={autorSlugData?.fullname}
            />
          </figure>
          <div>
            <h4 className="mb-1 font-medium">{autorSlugData?.fullname}</h4>
            <span className="font-normal text-paragraphColor">
              {autorSlugData?.agency}
            </span>
          </div>
        </div>
        <span className="flex items-center px-4 py-3 text-sm text-white bg-black rounded-md gap-x-2 dark:bg-gray-600">
          <IoNewspaperOutline className="text-md" />
          Number of news: {authorAllNewsData?.total}
        </span>
      </div>

      <AuthorNews authorAllNewsData={authorAllNewsData} />
    </>
  );
};

export default Author;
