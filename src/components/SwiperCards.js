import React from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import classes from "./SwiperCards.module.sass";
import "swiper/css";
import "swiper/css/navigation";

const SwiperCards = ({data}) => {
  const {lang} = useSelector(state => state.HeaderReducer);
  return (
    <Swiper
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
      className={classes.Carousel}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className={classes.Carousel__card}>
            <div className={classes.Carousel__card__imgContainer}>
              <div
                className={classes.Carousel__card__imgContainer__img}
                style={{ backgroundImage: `url(${item.img})` }}
              />
            </div>
            <p className={classes.Carousel__card__label}>{item.label[lang]}</p>
            <p className={classes.Carousel__card__text}>{item.text[lang]}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCards;
