import React, {useState,useEffect}from 'react';
import classes from "./MainPage.module.sass";
import Header from '../components/Header';
import { Link as ScrollLink, Element } from 'react-scroll';
import img2 from '../images/img-2.webp'


import img5 from '../images/img-5.webp'

import img7 from '../images/img-7.webp'
import img8 from '../images/img-8.webp'
import img9 from '../images/img-9.webp'
import img10 from '../images/img-10.webp'
import img11 from '../images/img-11.webp'
import hotel1 from '../images/img-hotelRoom1.jpg'
import restoran from '../images/img-restaurant.jpg'
import SwiperComponent from '../components/Swiper';
import Container from '../components/Container';
import Carousel from '../components/Carousel';
import MapLocalComponent from '../components/MapLocalComponent';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Contacts from '../components/Contacts';

const MainPage = () => {
    const imgs = [img2,img5,img7,img8,img9,img11]
    const photos = [
        {id: 0, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 1, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 2, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 3, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 4, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 5, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"}
    ]
    const contactInfo = [
        "г. Бишкек: ул. Манаса, д. 15",
        "г. Чолпон-Ата (Иссык-Куль): ул. Советская, д. 42",
        "г. Нарын: ул. Абдылдаева, д. 7",
        "Телефон: +996 705 19-05-06",
        "Email: pavel.060519@gmail.com"
    ];
    const markers=[
        [42.8767, 74.5980], // Бишкек
        [42.6490, 77.0850], // Иссык-Куль
        [41.4287, 76.0005]  // Нарын
    ]
    const cards = [
        {
            label: "Бишкек",
            text: "История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.",
            img: img11,
            link: "/bishkek"
        },
        {
            label: "Иссык-Куль",
            text: "История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.",
            img: img11,
            link: "/issyk-Kul"
        },
        {
            label: "Нарын",
            text: "История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.",
            img: img11,
            link: "/naryn"
        }
    ]
    return (
        <div className={classes.Main}>
            <div className={classes.pipz}>
                <Header/>
                <div className={classes.Main__swiper}>
                    <SwiperComponent photos={imgs} autoplay={true}/>
                </div>
                <Container inner={
                    <div className={classes.Main__swiper__textArea}>
                        <p className={classes.Main__swiper__textArea__name}>JILDIZ EMPERIAL HOTELS</p>
                        <p className={classes.Main__swiper__textArea__text}>Cеть премиальных отелей, где каждая ночь наполнена комфортом, а каждый день – приключениями!</p>
                        <button className={classes.Main__swiper__textArea__button}>Больше о нас</button>
                    </div>
                }/>
            </div>
            <Element className={classes.Main__hotels}>
                <Container inner={
                    <div className={classes.Main__hotels__inner}>
                        <p className={classes.Main__hotels__inner__H}>Изумительные отели в красивейших уголках Кыргызстана</p>
                        <div className={classes.Main__hotels__inner__cards}>
                            {cards.map((obj,idx)=>(
                                <Link key={idx} to={obj.link} className={classes.Main__hotels__inner__cards__card}>
                                    <div className={classes.Main__hotels__inner__cards__card__imgContainer}>
                                        <div className={classes.Main__hotels__inner__cards__card__imgContainer__img} style={{backgroundImage: `url(${obj.img})`}}/>
                                    </div>
                                    <div className={classes.Main__hotels__inner__cards__card__container}>
                                        <p className={classes.Main__hotels__inner__cards__card__container__H}>{obj.label}</p>
                                        <p className={classes.Main__hotels__inner__cards__card__container__text}>{obj.text}</p>
                                        <button className={classes.Main__hotels__inner__cards__card__container__button}>Подробнее</button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                }/>    
            </Element>
            <div className={classes.Main__rooms}>
                <Carousel photos={photos}/>    
            </div>
            <div className={classes.Main__restorans}>
                <Container inner={
                    <div className={classes.Main__restorans__inner}>
                        <div className={classes.Main__restorans__inner__left}>
                            <p className={classes.Main__restorans__inner__left__label}>Рестораны и бары</p>
                            <p className={classes.Main__restorans__inner__left__text}>Мы работаем с лучшими ресторанами национальной кухни, где традиционные рецепты сочетаются с высоким качеством. Наслаждайтесь аутентичными блюдами в уютной обстановке или заказывайте их с доставкой прямо в ваш номер.</p>
                            <div className={classes.Main__restorans__inner__left__btns}>
                                <div className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>NAVAT</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </div>
                                <div className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>FRUNZE</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </div>
                                <div className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>IWA BAR</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </div>
                            </div>
                        </div>
                        <div  className={classes.Main__restorans__inner__right}>
                            <div className={classes.Main__restorans__inner__right__inner} style={{backgroundImage: `url(${restoran})`}}/>
                            <div className={classes.Main__restorans__inner__right__br}/>
                        </div>
                        <ScrollLink smooth={true} duration={500} to={classes.Main__hotels} className={classes.Main__restorans__inner__btn}>
                            <p>подробнее на страницах отелей</p>
                        </ScrollLink>
                    </div>    
                }/>
            </div>
            <Contacts adesses={contactInfo} markers={markers} zoom={7}/>
            <Footer/>
        </div>
    );
};
export default MainPage;