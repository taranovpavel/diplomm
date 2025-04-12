import React from 'react';
import { useSelector } from 'react-redux';

import classes from './NarynPage.module.sass';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SwiperCards from '../components/SwiperCards';
import Collage from '../components/Collage';
import Carousel from '../components/Carousel';
import Contacts from '../components/Contacts';
import SwiperRestorans from '../components/SwiperRestorans';

import dataAboutHotels from "../data/aboutHotels.json"
import dataAboutRest from "../data/aboutRest.json"
import dataAboutCity from "../data/aboutCity.json"
import dataAboutMany from "../data/aboutMany.json"
import dataContact from "../data/contacts.json"
import dataNaryn from '../data/narynHotels.json'

const NarynPage = () => {
    window.scrollTo(0, 0);
    const {lang} = useSelector(state => state.HeaderReducer)   
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <div className={classes.Main__cards}>
                <p className={classes.Main__cards__label}>{dataAboutHotels.label[lang]}</p>
                <SwiperCards data={dataAboutHotels.cards}/>
            </div>
            <Collage data={dataAboutCity[2]}/>
            <div className={classes.Main__imgs}>
                <div className={classes.Main__imgs__inner}>
                    {dataAboutMany[2].map((item)=>(
                        <div key={item.id} className={classes.Main__imgs__inner__card} style={{backgroundImage: `url(${item.img})`}}>
                            <div className={classes.Main__imgs__inner__card__info}>
                                <div className={classes.Main__imgs__inner__card__info__label}>
                                    <p className={classes.Main__imgs__inner__card__info__label__text}>{item.label[lang]}</p>
                                </div>
                                <p className={classes.Main__imgs__inner__card__info__text}>{item.text[lang]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.Main__rooms}>
                <Carousel data={dataNaryn} link={"/book/naryn"}/>
            </div>
            <div className={classes.Main__restorans}>
                <p className={classes.Main__restorans__label}>{dataAboutRest.label[lang]}</p>
                <SwiperRestorans data={dataAboutRest.cards}/>
            </div>
            
            <Contacts data={[dataContact.naryn]} markers={[dataContact.naryn.coordinates]} zoom={14}/>
            <Footer/>
        </div>
    );
};

export default NarynPage;