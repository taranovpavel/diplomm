import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './Tour.module.sass'
import Container from './Container';

const Tour = ({data}) => {
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Tour}>
                <Container inner={
                    <div className={classes.Tour__inner}>
                        <div className={classes.Tour__inner__left}>
                            <p className={classes.Tour__inner__left__label}>{data.label[lang]}</p>
                            <p className={classes.Tour__inner__left__text}>{data.text[lang]}</p>
                            <Link to={"/book/bishkek"} className={classes.Tour__inner__left__btn}>
                                <p>{data.btn[lang]}</p>
                                <div className={classes.Tour__inner__left__btn__br}/>
                            </Link>
                        </div>
                        <div className={classes.Tour__inner__right}>
                            <div className={classes.Tour__inner__right__one}>
                                <div className={classes.Tour__inner__right__one__inner} style={{backgroundImage: `url(${data.img1})`}}/>
                            </div>
                            <div className={classes.Tour__inner__right__two}>
                                <div className={classes.Tour__inner__right__two__inner} style={{backgroundImage: `url(${data.img2})`}}/>
                            </div>
                        </div>
                    </div>
                }/>
        </div>
    );
};

export default Tour;