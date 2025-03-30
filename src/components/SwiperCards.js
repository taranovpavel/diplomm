import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import classes from "./SwiperCards.module.sass"
import "swiper/css";
import "swiper/css/navigation";

const SwiperCards = ({photos}) => {
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
                  <div className={classes.Carousel__card__img} style={{backgroundImage: `url(${item.img})`}}/>
                  <p className={classes.Carousel__card__label}>{item.label}</p>
                  <p className={classes.Carousel__card__text}>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    );
};

export default SwiperCards;