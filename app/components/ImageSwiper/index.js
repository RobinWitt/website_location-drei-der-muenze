// https://swiperjs.com/demos

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function ImageSwiper({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map(({ id, src, alt }) => {
          return (
            <SwiperSlide key={id}>
              <Image src={src} alt={alt} fill />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
