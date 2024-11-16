import React, { FormEvent, memo, ReactElement, useState } from "react";
import Button from "../Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import moment from "moment";
import { useStoreAuth } from "../../../store/features/auth.slice";
import classNames from "classnames";
import { translate } from "../../../helper/helper";

interface User {
  id: number;
  photo: string;
  name: string;
  surname: string;
}

interface CommentItem {
  id: number;
  body: string;
  created_at: string | Date;
  user: User;
}

interface CommentProps {
  items: CommentItem[];
  onSubmit: (data: string) => void;
  onDelete: (id: number) => void;
}

const Comment: React.FC<CommentProps> = ({
  items = [],
  onSubmit,
  onDelete,
}) => {
  const { user, token } = useStoreAuth();
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (message) {
      onSubmit(message);
      setMessage("");
    }
  };

  const renderCommentList = (): ReactElement[] | ReactElement => {
    if (items && items.length > 0) {
      return items.map((item) => (
        <li key={item.id}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <figure className="size-[3rem] overflow-hidden">
                  <img
                    className="size-full rounded-full object-cover"
                    src={item.user.photo}
                    alt={item.user.name}
                  />
                </figure>
                <h4 className="text-lg text-primary">
                  {item.user.name}
                  <span className="ms-1">{item.user.surname}</span>
                </h4>
              </div>
            </div>
            {user?.id === item.user.id && (
              <div
                onClick={() => onDelete(item.id)}
                className="cursor-pointer rounded-md bg-red-600 p-2 text-xl text-white"
              >
                <AiOutlineDelete />
              </div>
            )}
          </div>
          <p className="py-2 text-paragraphColor">{item.body}</p>
          <span className="text-sm text-paragraphColor">
            {moment(item.created_at).format("DD-MM-YYYY HH:mm")}
          </span>
        </li>
      ));
    } else {
      return <p>{translate("comment.noComment")}</p>;
    }
  };

  return (
    <div className="mx-auto w-full max-w-[55rem] pb-7">
      {token && (
        <div className="text-center">
          <h3 className="mb-3 text-lg font-medium">
            {translate("comment.add")}
          </h3>
          <div className="flex flex-col items-center gap-y-3">
            <form onSubmit={handleSubmit} className="w-full">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mb-3 h-[12rem] w-full resize-none rounded-lg p-3 outline-none dark:bg-gray-700 dark:text-white dark:placeholder:text-white"
                placeholder={translate("comment.input")}
              />
              <Button
                disabled={!message.trim()}
                type="submit"
                variant="primaryDark"
                rounded={true}
                size="sm"
              >
                {translate("comment.post")}
              </Button>
            </form>
          </div>
        </div>
      )}

      {!token && (
        <div className="rounded-md bg-red-900 py-7 text-center text-white">
          {translate("comment.login")}
        </div>
      )}

      <div className="mt-5">
        <h3
          onClick={() => setShow(!show)}
          className="mb-10 flex cursor-pointer items-center gap-x-3"
        >
          {translate("comment.all")} ({items.length})
          <div className="grid size-[1.7rem] place-items-center rounded-full bg-primaryDarker text-white">
            {show ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </h3>

        <ul
          className={classNames({
            "flex flex-col gap-y-10 transition-[max-height,opacity] duration-700":
              true,
            "max-h-0 overflow-hidden opacity-0": !show,
            "max-h-[80rem] overflow-auto opacity-100": show,
          })}
        >
          {renderCommentList()}
        </ul>
      </div>
    </div>
  );
};

export default memo(Comment);
