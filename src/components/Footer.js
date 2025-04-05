import React from 'react';
import classes from ".//Footer.module.sass"
import Container from './Container';
import { ReactComponent as Logo} from "../images/icon-logoWhiteText.svg"
import { Link } from 'react-router-dom';
const Footer = () => {
    const names = [["/","Главная"],["/book","Наши отели"],["/bishkek","Бишкек"],["/issyk-kul","Исык-Куль"],["/naryn","Нарын"],["/about","О нас"]]
    return (
        <div className={classes.Footer}>
            <Container inner={
                <div className={classes.Footer__inner}>
                    <div className={classes.Footer__inner__top}>
                        {names.map((item,idx)=>(
                            <Link to={item[0]} id={idx} className={classes.Footer__inner__top__btn}>
                                <p>{item[1]}</p>
                                <div className={classes.Footer__inner__top__btn__br}/>
                            </Link>
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