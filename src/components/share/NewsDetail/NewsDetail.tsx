import React from "react";
import { Link } from "react-router-dom";
import Comment from "../../ui/Comment";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetail: React.FC = () => {
  return (
    <>
      <div className="py-7">
        <Link className="flex p-2 px-4 mb-5 text-white bg-black rounded-md w-max" to={"/"}>
          <FaArrowLeft />
        </Link>

        <h3 className="text-2xl text-black">
          Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August
        </h3>
        <Link
          className="inline-flex px-4 py-1 mt-3 rounded-md bg-activeLink text-primaryDark"
          to={""}
        >
          Mobile
        </Link>
      </div>

      <figure className="aspect-[16/8] overflow-hidden rounded-md">
        <img
          className="object-cover object-center size-full"
          src="https://i0.wp.com/blog.ugreen.com/wp-content/uploads/2020/10/iphone-12-banner-1.png?fit=1140%2C680&ssl=1"
          alt=""
        />
      </figure>

      <p className="mt-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id vitae odio
        soluta dolores facilis repellat quisquam veritatis commodi ipsam vel
        amet consequatur explicabo nam magni incidunt doloremque, eveniet
        voluptatibus, impedit aliquam velit illum! Excepturi nihil numquam
        consectetur doloremque molestias atque quo, recusandae provident
        repellendus placeat rem velit laudantium ad unde blanditiis! Magni
        obcaecati, porro id, debitis nihil voluptas sit, temporibus in at
        dolores dolore! Tempora autem repellendus quas itaque sed beatae
        officiis! Molestias, dignissimos. Eveniet sed asperiores, doloribus
        minima reprehenderit, modi porro quam animi atque quos temporibus
        praesentium. Inventore deserunt deleniti consequuntur at sed numquam
        asperiores dolorem dicta officia explicabo? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias culpa sunt tempore laudantium magnam
        necessitatibus expedita nisi atque reiciendis sequi amet inventore
        laborum aspernatur nihil impedit quos et debitis praesentium dolores
        porro neque, quidem repellendus velit. A sit officia sint totam quasi
        enim ad. Laudantium eius harum quisquam repellendus aspernatur
        consequatur excepturi, inventore magnam praesentium, ducimus quasi
        necessitatibus, voluptatum in ut expedita quod. Delectus, ducimus vitae
        placeat esse in sapiente quibusdam, eligendi, laudantium iusto quisquam
        officia fugiat obcaecati hic fuga nihil magni distinctio aut? Nemo
        rerum, tempora officiis deserunt commodi nesciunt sunt blanditiis
        numquam ullam aliquid, provident cupiditate sed! Id!
      </p>

      <Comment />
    </>
  );
};

export default NewsDetail;
