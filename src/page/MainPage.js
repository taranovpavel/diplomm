import React, {useState,useEffect}from 'react';
import classes from "./MainPage.module.sass";
import Header from '../components/Header';
import img1 from '../images/img-1.webp'
import img2 from '../images/img-2.webp'
import img3 from '../images/img-3.webp'
import img4 from '../images/img-4.webp'
import img5 from '../images/img-5.webp'
import img6 from '../images/img-6.webp'
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

const MainPage = () => {
    const imgs = [img2,img3,img4,img5,img6,img7,img8,img9,img11]
    const photos = [
        {id: 0, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 1, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 2, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 3, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 4, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 5, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"}
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
            <div className={classes.Main__hotels}>
                <Container inner={
                    <div className={classes.Main__hotels__inner}>
                        <p className={classes.Main__hotels__inner__H}>Изумительные отели в красивейших уголках Кыргызстана</p>
                        <div className={classes.Main__hotels__inner__cards}>
                            <div className={classes.Main__hotels__inner__cards__card}>
                                <div className={classes.Main__hotels__inner__cards__card__imgContainer}>
                                    <div className={classes.Main__hotels__inner__cards__card__imgContainer__img} style={{backgroundImage: `url(${img11})`}}/>
                                </div>
                                <div className={classes.Main__hotels__inner__cards__card__container}>
                                    <p className={classes.Main__hotels__inner__cards__card__container__H}>Чуйская область</p>
                                    <p className={classes.Main__hotels__inner__cards__card__container__text}>История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.</p>
                                    <button className={classes.Main__hotels__inner__cards__card__container__button}>Подробнее</button>
                                </div>
                            </div>
                            <div className={classes.Main__hotels__inner__cards__card}>
                                <div className={classes.Main__hotels__inner__cards__card__imgContainer}>
                                    <div className={classes.Main__hotels__inner__cards__card__imgContainer__img} style={{backgroundImage: `url(${img11})`}}/>
                                </div>
                                <div className={classes.Main__hotels__inner__cards__card__container}>
                                    <p className={classes.Main__hotels__inner__cards__card__container__H}>Чуйская область</p>
                                    <p className={classes.Main__hotels__inner__cards__card__container__text}>История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.</p>
                                    <button className={classes.Main__hotels__inner__cards__card__container__button}>Подробнее</button>
                                </div>
                            </div>
                            <div className={classes.Main__hotels__inner__cards__card}>
                                <div className={classes.Main__hotels__inner__cards__card__imgContainer}>
                                    <div className={classes.Main__hotels__inner__cards__card__imgContainer__img} style={{backgroundImage: `url(${img11})`}}/>
                                </div>
                                <div className={classes.Main__hotels__inner__cards__card__container}>
                                    <p className={classes.Main__hotels__inner__cards__card__container__H}>Чуйская область</p>
                                    <p className={classes.Main__hotels__inner__cards__card__container__text}>История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.</p>
                                    <button className={classes.Main__hotels__inner__cards__card__container__button}>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }/>    
            </div>
            <div className={classes.Main__rooms}>
                <Carousel photos={photos}/>    
            </div>
            <div className={classes.Main__tour}>
                <Container inner={
                    <div className={classes.Main__tour__inner}>
                        <div className={classes.Main__tour__inner__left}>
                            <p className={classes.Main__tour__inner__left__label}>Экскурсия по городу и окрестностям</p>
                            <p className={classes.Main__tour__inner__left__text}>Наши профессиональные гиды ответят на все вопросы и проведут для вас увлекательную экскурсию по этому удивительному городу.</p>
                            <div className={classes.Main__tour__inner__left__btn}>
                                <p>Подробнее</p>
                                <div className={classes.Main__tour__inner__left__btn__br}/>
                            </div>
                        </div>
                        <div className={classes.Main__tour__inner__right}>
                            <div className={classes.Main__tour__inner__right__one}>
                                <div className={classes.Main__tour__inner__right__one__inner} style={{backgroundImage: `url(${img10})`}}/>
                            </div>
                            <div className={classes.Main__tour__inner__right__two}>
                                <div className={classes.Main__tour__inner__right__two__inner} style={{backgroundImage: `url(${img1})`}}/>
                            </div>
                        </div>
                    </div>
                }/>
            </div>
            <div className={classes.Main__restorans}>
                <Container inner={
                    <div className={classes.Main__restorans__inner}>
                        <div className={classes.Main__restorans__inner__left}>
                            <p className={classes.Main__restorans__inner__left__label}>Рестораны и бары</p>
                            <p className={classes.Main__restorans__inner__left__text}>Идеальное расположение в самом сердце города, соседство с удивительным Исаакиевским собором – все это превращает Four Seasons Hotel Lion Palace St. Petersburg в излюбленное место для тех, кто ценит изысканные рестораны.</p>
                            <div className={classes.Main__restorans__inner__left__btns}>
                                <div className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>NAVAT</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </div>
                                <div className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>NAVAT</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </div>
                                <div className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>NAVAT</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </div>
                            </div>
                        </div>
                        <div  className={classes.Main__restorans__inner__right}>
                            <div className={classes.Main__restorans__inner__right__inner} style={{backgroundImage: `url(${restoran})`}}/>
                            <div className={classes.Main__restorans__inner__right__br}/>
                        </div>
                        <div className={classes.Main__restorans__inner__btn}>
                            <p>посмотреть все рестораны</p>
                        </div>
                    </div>    
                }/>
            </div>
            <div className={classes.Main__contacts}>
                <Container inner={
                    <div className={classes.Main__contacts__inner}>
                        <div className={classes.Main__contacts__inner__left}>
                            <MapLocalComponent b={74.6 } a={42.880953}/>
                        </div>
                        <div className={classes.Main__contacts__inner__right}>
                            <p className={classes.Main__contacts__inner__right__label}>Контакты</p>
                            <p className={classes.Main__contacts__inner__right__text}>· г. Бишкек: ул. Манаса, д. 15</p>
                            <p className={classes.Main__contacts__inner__right__text}>· г. Чолпон-Ата (Иссык-Куль): ул. Советская, д. 42</p>
                            <p className={classes.Main__contacts__inner__right__text}>· г. Нарын: ул. Абдылдаева, д. 7</p>
                            <p className={classes.Main__contacts__inner__right__text}>· +996 705 19-05-06</p>
                            <p className={classes.Main__contacts__inner__right__text}>· pavel.060519@gmail.com</p>
                            <div className={classes.Main__contacts__inner__right__br}/>
                            <div className={classes.Main__contacts__inner__right__btn}>
                                <p>написать нам</p>
                            </div>
                        </div>
                    </div>
                }/>
            </div>
            <Footer/>
        </div>
    );
};
export default MainPage;