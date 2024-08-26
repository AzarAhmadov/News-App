import React, { useEffect } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { useFetchAuthorBySlug } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Author: React.FC = () => {
  const { slug } = useParams();
  const [data] = useFetchAuthorBySlug(slug);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-4 border rounded-md bg-inputBg">
      <div className="flex items-center gap-x-3">
        <figure className="size-[4.5rem] overflow-hidden rounded-full border border-primaryDarker/30 p-1">
          <img
            className="object-cover rounded-full size-full"
            src={data?.photo}
            alt={data?.fullname}
          />
        </figure>
        <div>
          <h4 className="mb-1 font-medium">Deontae Leannon</h4>
          <span className="font-normal text-paragraphColor">
            {data?.agency}
          </span>
        </div>
      </div>
      <span className="flex items-center px-4 py-3 text-sm text-white bg-black rounded-md gap-x-2">
        <IoNewspaperOutline className="text-md" />
        Xəbər sayı: 20
      </span>
    </div>
  );
};

export default Author;
