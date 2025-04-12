import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import dataRoutes from '../data/routes.json'
import classes from ".//Footer.module.sass"
import Container from './Container';

import { ReactComponent as Logo} from "../images/icon-logoWhiteText.svg"

const Footer = () => {
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Footer}>
            <Container inner={
                <div className={classes.Footer__inner}>
                    <div className={classes.Footer__inner__top}>
                        {dataRoutes.routes.map((item,idx)=>(
                            <Link to={item.path} key={idx} className={classes.Footer__inner__top__btn}>
                                <p>{item.label[lang]}</p>
                                <div className={classes.Footer__inner__top__btn__br}/>
                            </Link>
                        ))}
                    </div>
                    <div className={classes.Footer__inner__br}/>
                    <div className={classes.Footer__inner__logoContainer}><Logo className={classes.Footer__inner__logoContainer__logo}/></div>
                    <div className={classes.Footer__inner__text}>{dataRoutes.name[lang]}</div>
                </div>
            }/>
        </div>
    );
};

export default Footer;