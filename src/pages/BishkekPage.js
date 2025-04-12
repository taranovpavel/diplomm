import React from 'react';

import classes from './BishkekPage.module.sass'

import Header from '../components/Header';
import Footer from '../components/Footer';
import SwiperCards from '../components/SwiperCards';
import Collage from '../components/Collage';
import Carousel from '../components/Carousel';
import Contacts from '../components/Contacts';
import Tour from '../components/Tour';

import SwiperRestorans from '../components/SwiperRestorans';

import dataAboutHotels from "../data/aboutHotels.json"
import dataAboutRest from "../data/aboutRest.json"
import dataAboutCity from "../data/aboutCity.json"
import dataAboutMany from "../data/aboutMany.json"
import dataContact from "../data/contacts.json"
import dataBishkek from '../data/bishkekHotels.json'
import { useSelector } from 'react-redux';

const BishkekPage = () => {
    window.scrollTo(0, 0);
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <div className={classes.Main__cards}>
                <p className={classes.Main__cards__label}>{dataAboutHotels.label[lang]}</p>
                <SwiperCards data={dataAboutHotels.cards}/>
            </div>
            <div className={classes.Main__rooms}>
                <Carousel data={dataBishkek} link={"/book/bishkek"}/>
            </div>
            <div className={classes.Main__collage}>
                <Collage data={dataAboutCity[0]}/>
            </div>
            <div className={classes.Main__restorans}>
                <p className={classes.Main__restorans__label}>{dataAboutRest.label[lang]}</p>
                <SwiperRestorans data={dataAboutRest.cards}/>
            </div>
            
            <Tour data={dataAboutMany[0]}/>
            <Contacts data={[dataContact.bishkek]} markers={[dataContact.bishkek.coordinates]} zoom={14}/>
            <Footer/>
        </div>
    );
};

export default BishkekPage;