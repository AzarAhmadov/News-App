import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Spinner from "../../components/ui/Spinner";
import { useFetchNewsBySlug, useFetchNewsComment } from "../../hooks/useFetch";
import ErrorMsg from "../../components/ui/ErrorMsg";
import GoBack from "../../components/ui/GoBack";
import Comment from "../../components/ui/Comment";
import { API } from "../../utils/api";
import NewsApi from "../../api/news.api";
import { notification } from "../../helper/helper";

const NewsDetail: React.FC = () => {
  const { slug } = useParams();

  const [data, loading] = useFetchNewsBySlug(slug);
  const [commentData, FetchComment] = useFetchNewsComment();

  const addComment = async (body: any) => {
    const res = await API.post(NewsApi.commentPost.replace(":id", data.id), {
      body,
    });

    if (res) {
      notification("success", "Your comment has been added");
      FetchComment(data.id);
    }
  };

  const handleDelete = async (commentId: any) => {
    const res = await API.delete(
      NewsApi.commentDestroy
        .replace(":newsId", data.id)
        .replace(":commentId", commentId),
    );
    if (res) {
      notification("success", "Your message has been successfully deleted");
      FetchComment(data.id);
    }
  };

  useEffect(() => {
    if (data.id) {
      FetchComment(data.id);
    }
  }, [data?.id]);

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
          className="mt-3 inline-flex rounded-md bg-activeLink px-4 py-1 text-primaryDark dark:bg-gray-700 dark:text-white"
          to={`/search?category=${data?.category?.slug}`}
        >
          {data?.category?.name}
        </Link>
      </div>

      <figure className="aspect-[16/8] overflow-hidden rounded-md">
        <img
          className="size-full object-cover object-center"
          src={data?.photo}
          alt={data?.author?.fullname}
        />
      </figure>

      <div
        className="mt-7"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>

      <div className="mb-5 mt-7 border-b border-gray-200 pb-5 text-center dark:border-gray-700">
        <h3 className="mb-2 text-paragraphColor">
          {moment(data?.published_date, "YYYYMMDD").fromNow()}
        </h3>
        <Link to={`/author/${data?.author?.slug}`}>
          by {data?.author?.fullname}
        </Link>
      </div>

      <Comment
        onSubmit={(data) => addComment(data)}
        items={commentData}
        onDelete={(id) => handleDelete(id)}
      />
    </>
  );
};

export default NewsDetail;
