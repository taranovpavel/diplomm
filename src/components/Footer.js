import React from 'react';
import classes from ".//Footer.module.sass"
import Container from './Container';
import { ReactComponent as Logo} from "../images/icon-logoWhiteText.svg"
const Footer = () => {
    const names = ["главная","наши отели","лучшие номера","рестораны","мероприятия","контакты","о нас"]
    return (
        <div className={classes.Footer}>
            <Container inner={
                <div className={classes.Footer__inner}>
                    <div className={classes.Footer__inner__top}>
                        {names.map((item,idx)=>(
                            <div id={idx} className={classes.Footer__inner__top__btn}>
                                <p>{item}</p>
                                <div className={classes.Footer__inner__top__btn__br}/>
                            </div>
                        ))}
                    </div>
                    <div className={classes.Footer__inner__br}/>
                    <div className={classes.Footer__inner__logoContainer}><Logo className={classes.Footer__inner__logoContainer__logo}/></div>
                    <div className={classes.Footer__inner__text}>© 2025. Отель JILDIZ IMPERIAL HOTELS, г. Бишкек Официальный сайт</div>
                </div>
            }/>
        </div>
    );
};

export default Footer;