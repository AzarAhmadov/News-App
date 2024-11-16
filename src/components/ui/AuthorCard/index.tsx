import React from "react";
import Button from "../Button";
import { MdArrowForwardIos } from "react-icons/md";

export interface IauthorCard {
  item: {
    agency: string;
    fullname: string;
    id: number;
    photo: string;
    slug: string;
    type: string;
  };
}

const AuthorCard: React.FC<IauthorCard> = ({ item }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-md gap-y-3 dark:bg-gray-800">
      <figure className="size-[85px] overflow-hidden rounded-full border border-black/10 p-1">
        <img
          className="object-cover rounded-full size-full"
          src={item.photo}
          alt={item.fullname}
        />
      </figure>
      <div className="text-center">
        <h3 className="text-md line-clamp-1">{item.fullname}</h3>
        <span className="text-sm line-clamp-1 text-paragraphColor dark:text-white">
          {item.agency}
        </span>
      </div>
      <Button
        outline={true}
        width="full"
        size="md"
        type="button"
        variant="black"
        rounded={true}
        to={`author/${item.slug}`}
      >
        <span className="flex items-center justify-center gap-x-2">
          Detail
          <MdArrowForwardIos />
        </span>
      </Button>
    </div>
  );
};

export default AuthorCard;
