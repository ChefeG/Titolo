import React, { useRef } from "react";
import styles from "./BlockInfo.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProductCard } from "../ProductCard/ProductCard";
// import { data, title } from "./data";

export const BlockInfo = ({ data, title }: { data: any, title:any }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.blockInfo}>
      <div className={styles.blockContent}>
        <h2>{title.mainTitle.toUpperCase()}</h2>
        <p>{title.secondTitle}</p>
      </div>
      <div className={styles.swiperProducts}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: "#arrowLeftInfo",
            nextEl: "#arrowRightInfo",
          }}
          spaceBetween={15}
          speed={1000}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={false}
          breakpoints={{
            640: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {data.map((slide:any, index:number) => (
            <SwiperSlide key={index}>
              <ProductCard data={slide}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <button ref={prevRef} className="arrow arrowLeft" id="arrowLeftInfo">
          <ArrowLeft />
        </button>
        <button ref={nextRef} className="arrow arrowRight" id="arrowRightInfo">
          <ArrowRight />
        </button>
      </div>
      <div className={styles.buttonExplore}>
        <button>{title.buttonTitle}<ArrowRight/></button>
      </div>
    </div>
  );
};
