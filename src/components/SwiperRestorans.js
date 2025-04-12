import React from 'react';
import { useSelector } from 'react-redux';

import classes from './SwiperRestorans.module.sass'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const SwiperRestorans = ({data}) => {
  const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
          className={classes.Carousel}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={classes.Carousel__card}>
                <div className={classes.Carousel__card__imgContainer}>
                  <div className={classes.Carousel__card__imgContainer__img} style={{backgroundImage: `url(${item.img})`}}/>
                  <div className={classes.Carousel__card__imgContainer__info}>
                    <p className={classes.Carousel__card__imgContainer__info__label}>{item.label.en}</p>
                    <p className={classes.Carousel__card__imgContainer__info__text}>{item.text[lang]}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    );
};

export default SwiperRestorans;