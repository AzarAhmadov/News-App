import React from "react";
import Slide from "../../ui/Swiper";
import { LuPencilLine } from "react-icons/lu";
import { SwiperSlide } from "swiper/react";
import NewsBlock from "../NewsBlock/NewsBlock";
import Button from "../../ui/Button";
import { MdArrowForwardIos } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { useFetchAutors } from "../../../hooks/useFetch";

const CenterBlock: React.FC = () => {
  const [data] = useFetchAutors();

  return (
    <>
      <NewsBlock
        title="Around the World"
        icon={<BiWorld className="text-xl" />}
      />
      <Slide title="Creators you should follow" icon={<LuPencilLine />}>
        {data?.data?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-4 bg-white rounded-md gap-y-3">
              <figure className="size-[85px] overflow-hidden rounded-full border border-black/10 p-1">
                <img
                  className="object-cover rounded-full size-full"
                  src={item.photo}
                  alt={item.fullname}
                />
              </figure>
              <div className="text-center">
                <h3 className="text-md line-clamp-1">{item.fullname}</h3>
                <span className="text-sm line-clamp-1 text-paragraphColor">
                  {item.agency}
                </span>
              </div>
              <Button
                outline={true}
                width="full"
                size="md"
                type="black"
                rounded={true}
              >
                <span className="flex items-center justify-center gap-x-2">
                  Detail
                  <MdArrowForwardIos />
                </span>
              </Button>
            </div>
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
