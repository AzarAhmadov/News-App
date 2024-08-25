import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const Comment: React.FC = () => {
  return (
    <div className="py-7">
      <div className="pb-5 mb-5 text-center border-b border-gray-200">
        <h3 className="mb-2 text-paragraphColor">
          Published July 5, 2021 - 8:16 pm IST
        </h3>
        <Link to={""}>by John Abraham</Link>
      </div>
      <div className="mx-auto w-full max-w-[55rem]">
        <div className="text-center ">
          <h3 className="mb-3 text-lg font-medium">Add your comment</h3>
          <div className="flex flex-col items-center gap-y-3">
            <textarea
              className="h-[10rem] w-full resize-none rounded-lg p-3 outline-none"
              placeholder="Enter your comment here.."
            />
            <Button type="primaryDark" rounded={true} size="sm">
              Post Comment
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="flex items-center gap-x-3">
            View All Comments (04){" "}
            <div className="grid size-[1.7rem] place-items-center rounded-full bg-primaryDarker text-white">
              <IoIosArrowDown />
            </div>
          </h3>

          <ul className="mt-3 space-y-5">
            <li>
              <div className="flex items-center justify-between">
                <h4 className="text-lg text-primary">Rakshan</h4>
                <div className="p-2 text-xl text-white bg-red-600 rounded-md cursor-pointer">
                  <AiOutlineDelete />
                </div>
              </div>
              <p className="py-2 text-paragraphColor">
                I’ve been a great fan of Samsung products since 2010. Can’t wait
                for this one. 🔥🔥🔥
              </p>
              <span className="text-sm text-paragraphColor">
                Posted on Jul 5, 2021 | 6:22 AM
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comment;
