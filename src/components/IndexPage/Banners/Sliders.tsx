"use client";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";
const Sliders = () => {
  return (
    <Swiper
      slidesPerView={1}
      style={{ height: "100%" , width:"100%" }}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      //   navigation= {{
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   }}

      // pagination={{
      //     el: "#containerForBullets",
      //     type: "bullets",
      //     bulletClass: "swiper-custom-bullet",
      //     bulletActiveClass: "swiper-custom-bullet-active",
      //     clickable: true,
      //   }}

      pagination={{
        clickable: true,
        bulletClass: "swiper-custom-bullet",
        bulletActiveClass: "swiper-custom-bullet-active",
      }}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper rounded-md"
    >
      <SwiperSlide>
        <div className="h-full w-full rounded-md"> 
          <img className="h-full w-full rounded-md" src="banner/nbanner (2).webp" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>

        <div className="h-full w-full  rounded-md">
        <img className="h-full w-full rounded-md" src="banner/nbanner (1).webp" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="h-full w-full  rounded-md">
      <img className="h-full w-full rounded-md" src="banner/nbanner (5).webp" alt="" />
      </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
