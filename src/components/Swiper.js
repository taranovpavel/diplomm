import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import {Autoplay, Pagination, Scrollbar} from "swiper/modules";

const SwiperComponent = ({photos,swiperClasses = "swiper", imageClasses = "image", autoplay= false}) => {
    return (
        <Swiper
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={autoplay?[ Pagination, Scrollbar, Autoplay ]:[Pagination, Scrollbar]}
            slidesPerView={1}
            className={swiperClasses}
        >
            {photos.map((item,idx)=> <SwiperSlide className={imageClasses} key={idx} style={{backgroundImage: `url(${item})`}} />)}
        </Swiper>
    );
};

export default SwiperComponent;