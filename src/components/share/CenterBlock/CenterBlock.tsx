import React from "react";
import Slide from "../../ui/Swiper";
import { LuPencilLine } from "react-icons/lu";
import { SwiperSlide } from "swiper/react";
import NewsBlock from "../NewsBlock/NewsBlock";
import { BiWorld } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { useFetchAuthors } from "../../../hooks/useFetch";
import AuthorCard, { IauthorCard } from "../../ui/AuthorCard";

const CenterBlock: React.FC = () => {
  const [data] = useFetchAuthors();

  return (
    <>
      <NewsBlock
        title="Around the World"
        icon={<BiWorld className="text-xl" />}
      />
      <Slide title="Creators you should follow" icon={<LuPencilLine />}>
        {data?.data?.map((item: IauthorCard["item"], index: number) => (
          <SwiperSlide key={index}>
            <AuthorCard item={item} />
          </SwiperSlide>
        ))}
      </Slide>
      <NewsBlock
        title="Popular news"
        icon={<FaRegNewspaper className="text-xl" />}
      />
    </>
  );
};

export default CenterBlock;
