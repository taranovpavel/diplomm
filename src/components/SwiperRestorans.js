import React from 'react';
import classes from './SwiperRestorans.module.sass'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SwiperRestorans = ({photos}) => {
    return (
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
          className={classes.Carousel}
        >
          {photos.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={classes.Carousel__card}>
                <div className={classes.Carousel__card__imgContainer}>
                  <div className={classes.Carousel__card__imgContainer__img} style={{backgroundImage: `url(${item.img})`}}/>
                  <div className={classes.Carousel__card__imgContainer__info}>
                    <p className={classes.Carousel__card__imgContainer__info__label}>{item.label}</p>
                    <p className={classes.Carousel__card__imgContainer__info__text}>{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    );
};

export default SwiperRestorans;