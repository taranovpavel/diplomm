import React from 'react';
import classes from './NarynPage.module.sass';
import Header from '../components/Header';
import Footer from '../components/Footer';
import hotel1 from '../images/img-hotelRoom1.jpg'
import SwiperCards from '../components/SwiperCards';
import Collage from '../components/Collage';
import Carousel from '../components/Carousel';
import Contacts from '../components/Contacts';
import Tour from '../components/Tour';
import SwiperRestorans from '../components/SwiperRestorans';
const NarynPage = () => {
    const photos = [
        {id: 0, img: hotel1, text: "Откройте для себя тишину и величие Нарына, наслаждаясь видами гор, которые создают уникальную атмосферу уединения и спокойствия.", label: "Гармония с природой"},
        {id: 1, img: hotel1, text: "Прогулка по величественным долинам Нарына и отдых у бассейна под открытым небом — идеальное место для того, чтобы почувствовать настоящую свободу.", label: "Свобода под открытым небом"},
        {id: 2, img: hotel1, text: "Погрузитесь в атмосферу традиций и вкусов Нарына, наслаждаясь местными блюдами, приготовленными по старинным рецептам, которые передаются из поколения в поколение.", label: "Традиционная кухня Нарына"},
        {id: 3, img: hotel1, text: "Прогулки на лошадях по живописным просторам Нарына — это возможность почувствовать себя частью величественной природы и открыть для себя культуру кочевников.", label: "Прогулка на лошади"},
        {id: 4, img: hotel1, text: "Лаунж-зона с видом на горы и долины — здесь можно отдохнуть в тени деревьев, наслаждаясь чашечкой чая и созерцая величие Нарына.", label: "Лаунж с видом на горы"},
        {id: 5, img: hotel1, text: "Тренажерный зал с открытым видом на просторы Нарына — идеальное место для активного отдыха, где можно поддерживать форму в окружении невероятных пейзажей.", label: "Тренировки на свежем воздухе"}
    ];
    const data = {
        img1: hotel1, 
        img2: hotel1,
        label:"Гармония природы и культуры",
        text: "Нарын — это место, где природа и культура сливаются в единую гармонию. Величественные горы, бескрайние долины и чистые реки создают удивительную атмосферу спокойствия и вдохновения. Здесь, среди дикой природы, вы найдете традиции, которые передаются из поколения в поколение, а культурное наследие оживает в каждом уголке.",
        btn: "забронировать номер"
    }
    const info = [
        {id: 0, img: hotel1, text: "Нарын окружен высокими горными хребтами Тянь-Шаня, а его бескрайние долины и реки создают уникальные природные пейзажи. Это место для тех, кто хочет погрузиться в атмосферу тишины и спокойствия, наслаждаясь красотой дикой природы.", label: "Величие природы"},
        {id: 1, img: hotel1, text: "Нарын — это центр кочевой культуры Кыргызстана. Здесь сохранились традиции, связанные с жизнью кочевников, включая уникальные ремесла, обычаи и традиции. Это место, где можно глубже понять историю и культуру народа.", label: "Традиции"},
        {id: 2, img: hotel1, text: "Нарын известен своим гостеприимством и атмосферой уединения. Здесь вас встретят открытые и дружелюбные люди, а окружающая природа и тишина создадут идеальные условия для отдыха и восстановления в полном комфорте.", label: "Гостеприимство"}
    ];
    const hotels = [
        {id: 0, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 1, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 2, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 3, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 4, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"},
        {id: 5, img: hotel1, title: "Делюкс", text: "Прежде чем отправиться на утреннюю прогулку по городу, выйдите на террасу номера"}
    ]
    const contactInfo = [
        "г. Нарын: ул. Абдылдаева, д. 7",
        "Телефон: +996 705 19-05-06",
        "Email: pavel.060519@gmail.com"
    ];
    const markers=[
        [41.4287, 76.0005]  // Нарын
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
            <Collage data={data}/>
            <div className={classes.Main__rooms}>
                <Carousel photos={hotels}/>
            </div>
            <div className={classes.Main__restorans}>
                <p className={classes.Main__restorans__label}>Рестораны и бары</p>
                <SwiperRestorans photos={photos}/>
            </div>
            <Tour obj={tour}/>
            <div className={classes.Main__imgs}>
                <div className={classes.Main__imgs__inner}>
                    {info.map((item)=>(
                        <div key={item.id} className={classes.Main__imgs__inner__card} style={{backgroundImage: `url(${item.img})`}}>
                            <div className={classes.Main__imgs__inner__card__info}>
                                <div className={classes.Main__imgs__inner__card__info__label}>
                                    <p className={classes.Main__imgs__inner__card__info__label__text}>{item.label}</p>
                                </div>
                                <p className={classes.Main__imgs__inner__card__info__text}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Contacts adesses={contactInfo} markers={markers} zoom={14}/>
            <Footer/>
        </div>
    );
};

export default NarynPage;