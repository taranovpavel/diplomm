import React from 'react';
import { useSelector } from 'react-redux';

import dataContact from "../data/contacts.json"
import dataAboutUs from "../data/aboutUsMain.json"
import classes from './AboutUs.module.sass'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Contacts from '../components/Contacts';

import img from "../images/img-about.jpg"

const AboutUs = () => {
    const {lang} = useSelector(state => state.HeaderReducer)
    window.scrollTo(0, 0);
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__left}> 
                        <p className={classes.Main__inner__left__label}>{dataAboutUs.title[lang]}</p>
                        {dataAboutUs.paragraphs.map((item,idx)=>(
                            <p key={idx} className={classes.Main__inner__left__text}>
                                {item[lang]}
                            </p>
                        ))}
                    </div>
                    <div className={classes.Main__inner__right}>
                        <div className={classes.Main__inner__right__img} style={{backgroundImage: `url(${img})`}}/>
                    </div>
                </div>
            }/>
            <Contacts 
              data={[dataContact.bishkek,dataContact.cholponAta,dataContact.naryn]} 
              markers={[dataContact.bishkek.coordinates,dataContact.cholponAta.coordinates,dataContact.naryn.coordinates]} 
              zoom={7}
            />
            <Footer/>
        </div>
    );
};

export default AboutUs;