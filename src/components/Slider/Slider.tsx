import React, { useRef, useState } from "react";
import { teasers } from "./data";
import styles from "./Slider.module.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {ArrowLeft, ArrowRight} from  "lucide-react"

export const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // const [isBeginnig, setIsBeginning] = useState(true);
  // const [isEnd, setIsEnd] = useState(false);

  // // Функция для проверки положения слайдера
  // const updateNavigationState = (swiper:any) => {
  //   setIsBeginning(swiper.isBeginning);
  //   setIsEnd(swiper.isEnd);
  // }
  
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.arrowRight}`,
          prevEl: `.${styles.arrowLeft}`,
        }}
        pagination={{ clickable: true }}
        spaceBetween={15}
        speed={700}
        slidesPerView={4.126}
        slidesPerGroup={4}
        loop={false} /*в конце список начинает по новой скролится*/
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
