import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './Collage.module.sass'
import Container from './Container';

const Collage = ({data}) => {
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__left}>
                        <div className={classes.Main__inner__left__img1} style={{backgroundImage: `url(${data.img1})`}}/>
                        <div className={classes.Main__inner__left__img2} style={{backgroundImage: `url(${data.img2})`}}/>
                    </div>
                    <div className={classes.Main__inner__right}>
                        <p className={classes.Main__inner__right__label}>{data.label[lang]}</p>
                        <p className={classes.Main__inner__right__text}>{data.text[lang]}</p>
                        <Link to={data.link} className={classes.Main__inner__right__button}>{data.btn[lang]}</Link>
                    </div>
                </div>
            }/>
        </div>
    );
};

export default Collage;