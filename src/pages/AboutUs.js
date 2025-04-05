import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import classes from './AboutUs.module.sass'
import img from "../images/img-about.jpg"
import Contacts from '../components/Contacts';
const AboutUs = () => {
    const contactInfo = [
        "г. Бишкек: ул. Манаса, д. 15",
        "г. Чолпон-Ата (Иссык-Куль): ул. Советская, д. 42",
        "г. Нарын: ул. Абдылдаева, д. 7",
        "Телефон: +996 705 19-05-06",
        "Email: pavel.060519@gmail.com"
    ];
    const markers=[
        [42.8767, 74.5980], // Бишкек
        [42.6490, 77.0850], // Иссык-Куль
        [41.4287, 76.0005]  // Нарын
    ]
    return (
        <div className={classes.Main}>
            <Header isBlack={true}/>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__left}>
                        <p className={classes.Main__inner__left__label}>О нас</p>
                        <p className={classes.Main__inner__left__text}>
                            Мы — команда, влюблённая в гостеприимство. Уже много лет мы с радостью принимаем гостей в наших уютных отелях в Бишкеке, Нарыне, Караколе и на побережье Иссык-Куля. Каждое наше пространство создаётся с заботой, чтобы вы чувствовали себя не просто туристом, а желанным гостем, как дома.
                        </p>
                        <p className={classes.Main__inner__left__text}>
                            Нам важно, чтобы вы могли отдохнуть в тишине, почувствовать атмосферу уюта и тёплого сервиса, независимо от того, путешествуете ли вы по работе или приехали насладиться природой Кыргызстана.
                        </p>
                        <p className={classes.Main__inner__left__text}>
                            Во всех наших отелях — комфортные номера, внимательный персонал и всегда живая улыбка на ресепшене.
                        </p>
                        <p className={classes.Main__inner__left__text}>
                            Мы верим, что настоящий комфорт — это не только удобная кровать и горячий душ, но и доверие. Мы надёжны: вы всегда можете быть уверены в качестве наших услуг, безопасности, чистоте и искренней заботе.
                        </p>
                        <p className={classes.Main__inner__left__text}>
                            Мы не просто сдаём комнаты — мы встречаем, как старых друзей. Добро пожаловать в наши отели. Добро пожаловать в атмосферу тепла и душевности.
                        </p>
                    </div>
                    <div className={classes.Main__inner__right}>
                        <div className={classes.Main__inner__right__img} style={{backgroundImage: `url(${img})`}}/>
                    </div>
                </div>
            }/>
            <Contacts adesses={contactInfo} markers={markers} zoom={7}/>
            <Footer/>
        </div>
    );
};

export default AboutUs;