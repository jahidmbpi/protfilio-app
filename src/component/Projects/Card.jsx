"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Projects/card.css";

export default function Card() {
  const [cardIndex, setCardIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCardIndex(swiper.realIndex);
  };

  return (
    <Swiper
      effect="cards"
      centeredSlides={true}
      slidesPerView={1}
      grabCursor={true}
      modules={[Autoplay, Pagination, Navigation, EffectCards]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => `
          <span class="${className}" style="background-color: #02F53F; width: 14px; height: 14px; margin-top: 10px; border-radius: 50%;"></span>
        `,
      }}
      onSlideChange={handleSlideChange}
      className="mySwiper"
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
    </Swiper>
  );
}
