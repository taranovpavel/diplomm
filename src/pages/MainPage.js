import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { useSelector } from 'react-redux';
import classes from "./MainPage.module.sass";

import Header from '../components/Header';

import SwiperComponent from '../components/Swiper';
import Container from '../components/Container';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';

import dataContact from "../data/contacts.json";
import dataAboutUs from "../data/aboutUsMini.json";
import dataCards from '../data/cards.json';
import dataRestorans from '../data/restorans.json';
import dataIssykKul from '../data/issyk-kulHotels.json'
import dataImgs from '../data/mainImgs.json'

import restoran from '../images/img-restaurant.jpg'

const MainPage = () => {
    window.scrollTo(0, 0);
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Main}>
            <div className={classes.pipz}>
                <Header/>
                <div className={classes.Main__swiper}>
                    <SwiperComponent photos={dataImgs} autoplay={true}/>
                </div>
                <Container inner={
                    <div className={classes.Main__swiper__textArea}>
                        <p className={classes.Main__swiper__textArea__name}>JILDIZ EMPERIAL HOTELS</p>
                        <p className={classes.Main__swiper__textArea__text}>{dataAboutUs.text[lang]}</p>
                        <Link to={"/about"} className={classes.Main__swiper__textArea__button}>{dataAboutUs.btn[lang]}</Link>
                    </div>
                }/>
            </div>
            <Element className={classes.Main__hotels}>
                <Container inner={
                    <div className={classes.Main__hotels__inner}>
                        <p className={classes.Main__hotels__inner__H}>{dataCards.label[lang]}</p>
                        <div className={classes.Main__hotels__inner__cards}>
                            {dataCards.cards.map((item,idx)=>(
                                <Link key={idx} to={item.link} className={classes.Main__hotels__inner__cards__card}>
                                    <div className={classes.Main__hotels__inner__cards__card__imgContainer}>
                                        <div className={classes.Main__hotels__inner__cards__card__imgContainer__img} style={{backgroundImage: `url(${item.img})`}}/>
                                    </div>
                                    <div className={classes.Main__hotels__inner__cards__card__container}>
                                        <p className={classes.Main__hotels__inner__cards__card__container__H}>{item.label[lang]}</p>
                                        <p className={classes.Main__hotels__inner__cards__card__container__text}>{item.text[lang]}</p>
                                        <button className={classes.Main__hotels__inner__cards__card__container__button}>{dataCards.btn[lang]}</button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                }/>    
            </Element>
            <div className={classes.Main__rooms}>
                <p className={classes.Main__rooms__label}>{dataAboutUs.bestRooms[lang]}</p>
                <Carousel data={dataIssykKul} link="/book/issyk-kul"/>    
            </div>
            <div className={classes.Main__restorans}>
                <Container inner={
                    <div className={classes.Main__restorans__inner}>
                        <div className={classes.Main__restorans__inner__left}>
                            <p className={classes.Main__restorans__inner__left__label}>{dataRestorans.label[lang]}</p>
                            <p className={classes.Main__restorans__inner__left__text}>{dataRestorans.text[lang]}</p>
                            <div className={classes.Main__restorans__inner__left__btns}>
                                <a href='https://navat.kg/page41217680.html?block=rec666375675' className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>NAVAT</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </a>
                                <a href='https://mozart.kg/' className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>MOZART</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </a>
                                <a href='https://parkhotel.kg/en/restaurants/' className={classes.Main__restorans__inner__left__btns__btn}>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brTop}/>
                                    <p>L’ART</p>
                                    <div className={classes.Main__restorans__inner__left__btns__btn__brBottom}/>
                                </a>
                            </div>
                        </div>
                        <div  className={classes.Main__restorans__inner__right}>
                            <div className={classes.Main__restorans__inner__right__inner} style={{backgroundImage: `url(${restoran})`}}/>
                            <div className={classes.Main__restorans__inner__right__br}/>
                        </div>
                        <ScrollLink smooth={true} duration={500} to={classes.Main__hotels} className={classes.Main__restorans__inner__btn}>
                            <p>{dataRestorans.btn[lang]}</p>
                        </ScrollLink>
                    </div>    
                }/>
            </div>
            <Contacts 
              data={[dataContact.bishkek,dataContact.cholponAta,dataContact.naryn]} 
              markers={[dataContact.bishkek.coordinates,dataContact.cholponAta.coordinates,dataContact.naryn.coordinates]} 
              zoom={7}
              />
            <Footer/>
        </div>
    );
};
export default MainPage;