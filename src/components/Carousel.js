import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import classes from "./Carousel.module.sass"
import dataBooking from '../data/book.json'

const Carousel = ({data,link}) => {
  const {lang} = useSelector(state => state.HeaderReducer)
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      className={classes.Carousel}
    >
      {data.map((item,idx) => (
        <SwiperSlide key={idx}>
          <div className={classes.Carousel__card} style={{backgroundImage: `url(${item.img})`}}>
              <div className={classes.Carousel__card__info}>
                  <div className={classes.Carousel__card__info__inner}>
                        <p className={classes.Carousel__card__info__inner__title}>{item.label[lang]}</p>
                        <p className={classes.Carousel__card__info__inner__text}>{item.text[lang]}</p>
                        <Link to={link} className={classes.Carousel__card__info__inner__book}><p>{dataBooking.bookNow[lang]}</p></Link>
                  </div>
                  <Link to={"/book"}  className={classes.Carousel__card__info__btn}>
                      <p>{dataBooking.roomsLabel[lang]}</p>
                      <div className={classes.Carousel__card__info__btn__br}/>
                  </Link>
                  <div className={classes.Carousel__card__info__id}>
                      <p>{idx+1} / {data.length}</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;