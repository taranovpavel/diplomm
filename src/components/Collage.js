import React from 'react';
import classes from './Collage.module.sass'
import Container from './Container';

const Collage = ({data}) => {
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__left}>
                        <div className={classes.Main__inner__left__img1} style={{backgroundImage: `url(${data.img1})`}}/>
                        <div className={classes.Main__inner__left__img2} style={{backgroundImage: `url(${data.img2})`}}/>
                    </div>
                    <div className={classes.Main__inner__right}>
                        <p className={classes.Main__inner__right__label}>{data.label}</p>
                        <p className={classes.Main__inner__right__text}>{data.text}</p>
                        <button className={classes.Main__inner__right__button}>{data.btn}</button>
                    </div>
                </div>
            }/>
        </div>
    );
};

export default Collage;