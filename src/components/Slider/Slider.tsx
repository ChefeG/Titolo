import React, { useRef } from "react";
import { teasers } from "./data";
import styles from "./Slider.module.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {ArrowLeft, ArrowRight} from  "lucide-react"

export const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `${styles.arrowRight}`,
          prevEl: `${styles.arrowLeft}`,
        }}
        pagination={{ clickable: true }}
        spaceBetween={15}
        slidesPerView={4.126}
        slidesPerGroup={4}
        loop={true} /*в конце список начинает по новой скролится*/
      >
        {teasers.map((teaser, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img key={index} src={teaser.image} alt={teaser.title} />
              <div className={styles.cardContent}>
                <h3>{teaser.title}</h3>
                <button>{teaser.buttonTitle}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={prevRef} className={`${styles.arrow} ${styles.arrowLeft}`} id="arrowLeft"><ArrowLeft/></button>
      <button ref={nextRef} className={`${styles.arrow} ${styles.arrowRight}`} id="arrowRight"><ArrowRight/></button>
    </div>
  );
};
