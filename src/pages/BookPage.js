import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './BookPage.module.sass'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

import dataCards from '../data/cards.json'

const BookPage = () => {
    window.scrollTo(0, 0);
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <div className={classes.Main__hotels}>
                <Container inner={
                    <div className={classes.Main__hotels__inner}>
                        <p className={classes.Main__hotels__inner__label}>Выберите свой идеальный отель </p>
                        <div className={classes.Main__hotels__inner__cards}>
                            {dataCards.cards.map((item,idx)=>(
                                <Link key={idx} to={item.linkBook} className={classes.Main__hotels__inner__cards__card}>
                                    <div className={classes.Main__hotels__inner__cards__card__imgContainer}>
                                        <div className={classes.Main__hotels__inner__cards__card__imgContainer__img} style={{backgroundImage: `url(${item.img})`}}/>
                                        <div className={classes.Main__hotels__inner__cards__card__imgContainer__container}>
                                            <p className={classes.Main__hotels__inner__cards__card__imgContainer__container__label}>{item.label[lang]}</p>
                                            <p className={classes.Main__hotels__inner__cards__card__imgContainer__container__text}>{item.text[lang]}</p>
                                            <button className={classes.Main__hotels__inner__cards__card__imgContainer__container__button}>{dataCards.btn1[lang]}</button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                }/>    
            </div>
            <Footer/>
        </div>
    );
};

export default BookPage;