import React from 'react';
import classes from './BishkekPage.module.sass'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import SwiperCards from '../components/SwiperCards';
import hotel1 from '../images/img-hotelRoom1.jpg'
import Collage from '../components/Collage';
import Carousel from '../components/Carousel';
import Contacts from '../components/Contacts';
const BishkekPage = () => {
    const photos = [
        {id: 0, img: hotel1, text: "Погрузитесь в атмосферу спокойствия и вдохновения, наслаждаясь видом на величественные горы прямо из вашего окна.", label: "Вид на горы"},
        {id: 1, img: hotel1, text: "Расслабьтесь у бассейна с видом на сад и окружающие просторы, создавая идеальные условия для отдыха.", label: "Бассейн на террасе"},
        {id: 2, img: hotel1, text: "Подарите себе незабываемые моменты в спа-зоне с массажами и расслабляющими процедурами, которые помогут восстановить силы.", label: "Спа-зона"},
        {id: 3, img: hotel1, text: "Идеальное место для романтического ужина или деловой встречи, где можно насладиться не только кухней, но и потрясающим видом.", label: "Ресторан с панорамным видом"},
        {id: 4, img: hotel1, text: "Уютная лаунж-зона с мягкими креслами и стильным интерьером — идеальное место для отдыха после долгого дня.", label: "Лаунж-зона"},
        {id: 5, img: hotel1, text: "Полноценный тренажерный зал для поддержания формы, с современным оборудованием и просторной зоной для тренировок.", label: "Спортивный зал"}
    ]
    const data = {
        img1: hotel1, 
        img2: hotel1,
        label:"Влюбляясь в Кыргызстан",
        text: "Бишкек и Чуйская область — это сердце Кыргызстана, где величественные горные пейзажи гармонично сочетаются с богатым культурным наследием. Здесь, среди бескрайних долин и живописных ущелий, ощущается уникальное сочетание традиций кочевников и динамичного ритма современного города.",
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
        "г. Бишкек: ул. Манаса, д. 15",
        "Телефон: +996 705 19-05-06",
        "Email: pavel.060519@gmail.com"
    ];
    const markers=[
        [42.8767,74.5980] // Бишкек
    ]

    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <div className={classes.Main__cards}>
                <p className={classes.Main__cards__label}>Где роскошь встречается с уютом</p>
                <SwiperCards photos={photos}/>
            </div>
            <div className={classes.Main__travel}>
                <div className={classes.Main__travel__inner}>
                    <div className={classes.Main__travel__inner__left}>
                        <p className={classes.Main__travel__inner__left__label}>Покоряя вершины</p>
                        <div className={classes.Main__travel__inner__left__img}/>
                    </div>
                    <div className={classes.Main__travel__inner__right}>
                        <div className={classes.Main__travel__inner__right__img}/>
                        <button className={classes.Main__travel__inner__right__btn}>подробнее</button>
                    </div>
                </div>
            </div>
            <div className={classes.Main__rooms}>
                <Carousel photos={hotels}/>
            </div>
            <div className={classes.Main__collage}>
                <Collage data={data}/>
            </div>
            <Contacts adesses={contactInfo} markers={markers} zoom={14}/>
            <Footer/>
        </div>
    );
};

export default BishkekPage;