import React, { memo, useRef } from "react";
import "swiper/css";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { typeSlider } from "../../../types/types";

const Slide: React.FC<typeSlider> = ({ title, icon, children }) => {
  const slidePrev = useRef(null);
  const slideNext = useRef(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-x-4">
          {icon}
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="flex space-x-3">
          <button
            ref={slidePrev}
            className="text-xl cursor-pointer disabled:opacity-20"
          >
            <MdArrowBack />
          </button>
          <button
            ref={slideNext}
            className="text-xl cursor-pointer disabled:opacity-20"
          >
            <MdArrowForward />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        modules={[Navigation]}
        navigation={{
          prevEl: slidePrev.current,
          nextEl: slideNext.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = slidePrev.current;
          swiper.params.navigation.nextEl = slideNext.current;
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default memo(Slide);
