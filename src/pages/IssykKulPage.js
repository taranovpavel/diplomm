import React from 'react';
import classes from './IssykKulPage.module.sass';
import Header from '../components/Header';
import Footer from '../components/Footer';
import hotel1 from '../images/img-hotelRoom1.jpg'
import IKtop from '../images/img-IKtop.webp'
import SwiperCards from '../components/SwiperCards';
import { useEffect, useState, useRef } from "react";
import Collage from '../components/Collage';
import Carousel from '../components/Carousel';
import Contacts from '../components/Contacts';
import Container from '../components/Container';
import SwiperRestorans from '../components/SwiperRestorans';
import Tour from '../components/Tour';
const IssykKulPage = () => {
    const photos = [
        { id: 0, img: IKtop,  label: "5 минут до озера", text: "Прогулка до озера займет всего 5 минут, и вы окажетесь на берегу Иссык-Куля, готовые насладиться его красотой." },
        { id: 1, img: IKtop,  label: "Вид на величественные горы", text: "Наслаждайтесь захватывающим видом на горы, который откроется вам прямо с окна." },
        { id: 2, img: IKtop,  label: "Расслабление в SPA с панорамой", text: "Отдых в нашем SPA-центре с видом на горы поможет вам полностью расслабиться и восстановить силы." },
        { id: 3, img: IKtop,  label: "Частный песчаный пляж", text: "Песчаный пляж на территории отеля станет идеальным местом для солнечных ванн и купания в кристально чистой воде." },
        { id: 4, img: IKtop,  label: "Закаты, которые невозможно забыть", text: "Каждый вечер вы сможете наслаждаться неповторимыми закатами, которые оставят неизгладимое впечатление." }
      ];
    const data = {
        img1: hotel1, 
        img2: hotel1,
        label:"Оазис в сердце Кыргызстана",
        text: "Иссык-Куль — это не просто озеро. Это настоящий оазис, окруженный величественными горными пейзажами, где каждый уголок природы наполнен гармонией. Вдохновляйтесь красотой чистейших вод и свежим воздухом, наслаждайтесь уединением и покоем в самом сердце Кыргызстана. Здесь каждый момент — это шанс забыться и почувствовать связь с природой.",
        btn: "забронировать номер"
    }
    const hotels = [
        {id: 0, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 1, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 2, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 3, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 4, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 5, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"}
    ]
    const contactInfo = [
        "г. Чолпон-Ата (Иссык-Куль): ул. Советская, д. 42",
        "Телефон: +996 705 19-05-06",
        "Email: pavel.060519@gmail.com"
    ];
    const markers=[
        [42.6490, 77.0850] // Иссык-Куль
    ]
    const tour={
        label:"",
        text:"",
        img1: hotel1,
        img2: hotel1
    }
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <div className={classes.Main__cards}>
                <p className={classes.Main__cards__label}>Где роскошь встречается с уютом</p>
                <SwiperCards photos={photos}/>
            </div>
            <div className={classes.Main__lake} >
                <Container inner={
                    <div className={classes.Main__lake__inner} style={{backgroundImage: `url(${IKtop})`}}>
                        <div className={classes.Main__lake__inner__info}>
                            <p className={classes.Main__lake__inner__info__label}>Жемчужина Кыргызстана</p>
                            <p className={classes.Main__lake__inner__info__text}>Окруженное величественными Тянь-Шаньскими горами, озеро Иссык-Куль — это уникальный уголок природы, где кристально чистая вода встречается с бескрайним небом. Его бирюзовые волны хранят древние легенды, а мягкий климат делает это место идеальным для отдыха в любое время года.</p>
                            <button className={classes.Main__lake__inner__info__btn}>забронировать номер</button>
                        </div>
                        <div className={classes.Main__lake__inner__bg}/>
                        <div className={classes.Main__lake__inner__bg1}/>
                        <div className={classes.Main__lake__inner__bg2}/>
                    </div>
                }/>
            </div>
            <div className={classes.Main__rooms}>
                <Carousel photos={hotels}/>
            </div>
            <Collage data={data}/>
            <div className={classes.Main__restorans}>
                <p className={classes.Main__restorans__label}>Рестораны и бары</p>
                <SwiperRestorans photos={photos}/>
            </div>
            <Tour obj={tour}/>
            <Contacts adesses={contactInfo} markers={markers} zoom={14}/>
            <Footer/>
        </div>
    );
};

export default IssykKulPage;