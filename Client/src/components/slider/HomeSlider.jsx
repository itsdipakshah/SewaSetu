import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../slider/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="w-full px-6 sm:px-12 lg:px-20 py-4 border-t-2 border-gray-200">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper rounded-xl overflow-hidden shadow-md"
        >
          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px]">
            <img
              src="https://img.lazcdn.com/us/domino/fdbefb23-5a2f-445e-a16d-f0b87e8c49ed_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/bf9b4274-5fe4-420c-90ae-44978c549461_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/2eb05b8c-3e7c-469d-a025-48c14fba5288_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/104f0752-3ab1-4e73-b5de-c7f3962e26bb_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/d1bf45f5-d177-49c4-bdde-3138940b99bf_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/149a722d-768f-4ab3-8523-470aaf94d027_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/06eb90f4-3e67-411c-94d6-5a0f1b5562ce_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/66ed743a-017c-447a-b7dd-f1833fe14465_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-full !h-[300px] md:!h-[400px] lg:!h-[500px] flex items-center justify-center bg-gray-100">
            <img
              src="https://img.lazcdn.com/us/domino/789445f7-6256-4559-8801-7f389ef05b07_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt="slider"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSlider;
