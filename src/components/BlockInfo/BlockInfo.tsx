import React, { useRef } from "react";
import styles from "./BlockInfo.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { data, title } from "./data";

export const BlockInfo = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  

  return (
    <div className={styles.blockInfo}>
      {/* <div className={styles.container}> */}
        <div className={styles.blockContent}>
          <h2>{title.mainTitle.toUpperCase()}</h2>
          <p>{title.secondTitle}</p>
        </div>
        <div className={styles.swiperProducts}>
          <Swiper 
          modules={[Navigation]}
          spaceBetween={15}
          speed={1000}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={false}
          >
            {data.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={styles.swiperProduct}>
                  <img src={slide.image1}></img>
                  <div className={styles.productInfo}>
                    <a>{slide.title.toUpperCase()}</a>
                    <p>{slide.brand}</p>
                    <div className={styles.productPrice}>
                      <p>{slide.prevPrice}</p>
                      <p>{slide.finalPrice}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button ref={prevRef} className="arrow arrowLeft" id="arrowLeft">
            <ArrowLeft />
          </button>
          <button ref={nextRef} className="arrow arrowRight" id="arrowRight">
            <ArrowRight />
          </button>
        </div>
        <div className={styles.buttonExplore}>
          <button>{title.buttonTitle}</button>
        </div>
      {/* </div> */}
    </div>
  );
};
