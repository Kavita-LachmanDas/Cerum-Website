import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen"
      >
         <SwiperSlide><Image src="/img9.gif" alt='hi' width="300" height={800}></Image></SwiperSlide>
        <SwiperSlide><Image src="/img10.webp" alt='hi' width="300" height={800}></Image></SwiperSlide>
        <SwiperSlide><Image src="/img11.gif" alt='hi' width="300" height={800}></Image></SwiperSlide>
        <SwiperSlide><Image src="/img12.webp" alt='hi' width="300" height={300}></Image></SwiperSlide>
        <SwiperSlide><Image src="/img13.webp" alt='hi' width="300" height={300}></Image></SwiperSlide>
        
      </Swiper>
    </>
  );
}
