import React, { useRef, useState } from "react";
import { teasers } from "./data";
import styles from "./Slider.module.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: "#arrowRight",
          prevEl: "#arrowLeft",
        }}
        effect="slide" // Эффект перехода (slide, fade, cube и т.д.)
        pagination={{ clickable: true }}
        spaceBetween={15}
        speed={1000}
        slidesPerView={4.126}
        slidesPerGroup={4}
        loop={false} /*в конце список начинает по новой скролится*/
        breakpoints={{
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          // 768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
        }}
      >
        <ul>
          {teasers.map((teaser, index) => (
            <li>
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <img key={index} src={teaser.image} alt={teaser.title} />
                  <div className={styles.cardContent}>
                    <h3>{teaser.title}</h3>
                    <button>{teaser.buttonTitle}</button>
                  </div>
                </div>
              </SwiperSlide>
            </li>
          ))}
        </ul>
      </Swiper>
      <button ref={prevRef} className="arrow arrowLeft" id="arrowLeft">
        <ArrowLeft />
      </button>
      <button ref={nextRef} className="arrow arrowRight" id="arrowRight">
        <ArrowRight />
      </button>
    </div>
  );
};
