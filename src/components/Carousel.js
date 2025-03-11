import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import classes from "./Carousel.module.sass"
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({photos}) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className={classes.Carousel}
      >
        {photos.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={classes.Carousel__card} style={{backgroundImage: `url(${item.img})`}}>
                <div className={classes.Carousel__card__info}>
                    <div className={classes.Carousel__card__info__inner}>
                        <p className={classes.Carousel__card__info__inner__title}>{item.title}</p>
                        <p className={classes.Carousel__card__info__inner__text}>{item.text}</p>
                        <button className={classes.Carousel__card__info__inner__book}>забронировать</button>
                    </div>
                    <div className={classes.Carousel__card__info__btn}>
                        <p>Все номера</p>
                        <div className={classes.Carousel__card__info__btn__br}/>
                    </div>
                    <div className={classes.Carousel__card__info__id}>
                        <p>{item.id+1} / {photos.length}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;