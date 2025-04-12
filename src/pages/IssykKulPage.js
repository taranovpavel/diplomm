import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './IssykKulPage.module.sass';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SwiperCards from '../components/SwiperCards';
import Collage from '../components/Collage';
import Carousel from '../components/Carousel';
import Contacts from '../components/Contacts';
import Container from '../components/Container';
import SwiperRestorans from '../components/SwiperRestorans';

import dataAboutHotels from "../data/aboutHotels.json"
import dataAboutRest from "../data/aboutRest.json"
import dataAboutCity from "../data/aboutCity.json"
import dataAboutMany from "../data/aboutMany.json"
import dataContact from "../data/contacts.json"
import dataIssykKul from '../data/issyk-kulHotels.json'

const IssykKulPage = () => {
    window.scrollTo(0, 0);
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <div className={classes.Main__cards}>
                <p className={classes.Main__cards__label}>{dataAboutHotels.label[lang]}</p>
                <SwiperCards data={dataAboutHotels.cards}/>
            </div>
            <div className={classes.Main__lake} >
                <Container inner={
                    <div className={classes.Main__lake__inner} style={{backgroundImage: `url(${dataAboutMany[1].img})`}}>
                        <div className={classes.Main__lake__inner__info}>
                            <p className={classes.Main__lake__inner__info__label}>{dataAboutMany[1].label[lang]}</p>
                            <p className={classes.Main__lake__inner__info__text}>{dataAboutMany[1].text[lang]}</p>
                            <Link to={"/book/issyk-kul"} className={classes.Main__lake__inner__info__btn}>{dataAboutMany[1].btn[lang]}</Link>
                        </div>
                        <div className={classes.Main__lake__inner__bg}/>
                        <div className={classes.Main__lake__inner__bg1}/>
                        <div className={classes.Main__lake__inner__bg2}/>
                    </div>
                }/>
            </div>
            <div className={classes.Main__rooms}>
                <Carousel data={dataIssykKul} link={"/book/issyk-kul"}/>
            </div>
            <Collage data={dataAboutCity[1]}/>
            <div className={classes.Main__restorans}>
                <p className={classes.Main__restorans__label}>{dataAboutRest.label[lang]}</p>
                <SwiperRestorans data={dataAboutRest.cards}/>
            </div>
            <Contacts data={[dataContact.cholponAta]} markers={[dataContact.cholponAta.coordinates]} zoom={14}/>
            <Footer/>
        </div>
    );
};

export default IssykKulPage;