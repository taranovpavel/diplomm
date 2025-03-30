import React from 'react';
import classes from './Tour.module.sass'
import Container from './Container';

const Tour = ({obj}) => {
    return (
        <div className={classes.Tour}>
                <Container inner={
                    <div className={classes.Tour__inner}>
                        <div className={classes.Tour__inner__left}>
                            <p className={classes.Tour__inner__left__label}>{obj.label}</p>
                            <p className={classes.Tour__inner__left__text}>{obj.text}</p>
                            <div className={classes.Tour__inner__left__btn}>
                                <p>Подробнее</p>
                                <div className={classes.Tour__inner__left__btn__br}/>
                            </div>
                        </div>
                        <div className={classes.Tour__inner__right}>
                            <div className={classes.Tour__inner__right__one}>
                                <div className={classes.Tour__inner__right__one__inner} style={{backgroundImage: `url(${obj.img1})`}}/>
                            </div>
                            <div className={classes.Tour__inner__right__two}>
                                <div className={classes.Tour__inner__right__two__inner} style={{backgroundImage: `url(${obj.img2})`}}/>
                            </div>
                        </div>
                    </div>
                }/>
            </div>
    );
};

export default Tour;