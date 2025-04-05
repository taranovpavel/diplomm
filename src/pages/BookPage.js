import React from 'react';
import classes from './BookPage.module.sass'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import img11 from '../images/img-11.webp'

const cards = [
    {
        label: "Бишкек",
        text: "История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.",
        img: img11,
        link: "./bishkek"
    },
    {
        label: "Иссык-Куль",
        text: "История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.",
        img: img11,
        link: "./issyk-kul"
    },
    {
        label: "Нарын",
        text: "История, природа, культура и современный ритм: всё это в Бишкеке, Ала-Арче и у Башни Бурана.",
        img: img11,
        link: "./naryn"
    }
]

const BookPage = () => {
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <div className={classes.Main__hotels}>
                <Container inner={
                    <div className={classes.Main__hotels__inner}>
                        <p className={classes.Main__hotels__inner__label}>Выберите свой идеальный отель </p>
                        <div className={classes.Main__hotels__inner__cards}>
                            {cards.map((obj,idx)=>(
                                <Link key={idx} to={obj.link} className={classes.Main__hotels__inner__cards__card}>
                                    <div className={classes.Main__hotels__inner__cards__card__imgContainer}>
                                        <div className={classes.Main__hotels__inner__cards__card__imgContainer__img} style={{backgroundImage: `url(${obj.img})`}}/>
                                        <div className={classes.Main__hotels__inner__cards__card__imgContainer__container}>
                                            <p className={classes.Main__hotels__inner__cards__card__imgContainer__container__label}>{obj.label}</p>
                                            <p className={classes.Main__hotels__inner__cards__card__imgContainer__container__text}>{obj.text}</p>
                                            <button className={classes.Main__hotels__inner__cards__card__imgContainer__container__button}>забронировать</button>
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