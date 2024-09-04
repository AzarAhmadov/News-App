import React, { memo, ReactElement } from "react";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import moment from "moment";

interface CommentItem {
  body: ReactElement;
  created_at: Date;
  user: {
    photo: string;
    name: string;
    surname: string;
  };
}

interface CommentProps {
  items: CommentItem[];
}

const Comment: React.FC<CommentProps> = ({ items = [] }) => {
  console.log(items);
  const renderCommentList = () => {
    if (items && items.length > 0) {
      if (items.length === 0) {
        return <p>No comments to display</p>;
      }

      return items.map((item, index) => (
        <li key={index}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <figure className="size-[3rem] overflow-hidden">
                  <img
                    className="object-cover rounded-full size-full"
                    src={item.user.photo}
                    alt={item.user.name}
                  />
                </figure>
                <h4 className="text-lg text-primary">
                  {item.user.name}
                  <span className="ms-1"> {item.user.surname}</span>
                </h4>
              </div>
            </div>
            <div className="p-2 text-xl text-white bg-red-600 rounded-md cursor-pointer">
              <AiOutlineDelete />
            </div>
          </div>
          <p className="py-2 text-paragraphColor">{item.body}</p>
          <span className="text-sm text-paragraphColor">
            {moment(item.created_at).format("DD-MM-YYYY HH:mm")}
          </span>
        </li>
      ));
    } else {
      return <p>No comments to display</p>;
    }
  };

  return (
    <div className="mx-auto w-full max-w-[55rem] pb-7">
      <div className="text-center">
        <h3 className="mb-3 text-lg font-medium">Add your comment</h3>
        <div className="flex flex-col items-center gap-y-3">
          <textarea
            className="h-[10rem] w-full resize-none rounded-lg p-3 outline-none dark:bg-gray-700 dark:text-white dark:placeholder:text-white"
            placeholder="Enter your comment here.."
          />
          <Button type="submit" variant="primaryDark" rounded={true} size="sm">
            Post Comment
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="flex items-center gap-x-3">
          View All Comments ({items.length})
          <div className="grid size-[1.7rem] place-items-center rounded-full bg-primaryDarker text-white">
            <IoIosArrowDown />
          </div>
        </h3>

        <ul className="mt-3 space-y-10">{renderCommentList()}</ul>
      </div>
    </div>
  );
};

export default memo(Comment);
