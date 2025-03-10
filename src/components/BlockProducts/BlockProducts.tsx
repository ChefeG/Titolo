import React, { useRef } from "react";
import styles from "./BlockProducts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProductCard } from "../ProductCard/ProductCard";

export const BlockProducts = ({ data, title }: { data: any; title: any }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const prevId = `arrowLeft_${title.id}`;
  const nextId = `arrowRight_${title.id}`;

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
            prevEl: `#${prevId}`,
            nextEl: `#${nextId}`,
          }}
          spaceBetween={15}
          speed={1000}
          loop={false}
          breakpoints={{
            480: { slidesPerView: 1.126, slidesPerGroup: 1 },
            640: { slidesPerView: 2.126, slidesPerGroup: 2 },
            768: { slidesPerView: 2.126, slidesPerGroup: 2},
            1024: { slidesPerView: 4.126, slidesPerGroup: 4 },
          }}
        >
          <ul>
            {data.map((slide: any, index: number) => (
              <li>
                <SwiperSlide key={index}>
                  <ProductCard data={slide} />
                </SwiperSlide>
              </li>
            ))}
          </ul>
        </Swiper>
        <button ref={prevRef} className="arrow arrowLeft" id={prevId}>
          <ArrowLeft />
        </button>
        <button ref={nextRef} className="arrow arrowRight" id={nextId}>
          <ArrowRight />
        </button>
      </div>
      <div className={styles.buttonExplore}>
        <button>
          {title.buttonTitle}
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
