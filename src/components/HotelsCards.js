import React from 'react';
import classes from './HotelsCards.module.sass'
import Container from './Container';

const HotelsCards = ({photos,currency,daysDifference}) => {
    return (
        <div className={classes.Carousel}>
            <Container inner={
                <div className={classes.Carousel__inner}>
                    {
                        photos.map((item,idx) => (
                            <div key={idx} className={classes.Carousel__card}>
                              <div className={classes.Carousel__card__imgContainer}>
                                <div className={classes.Carousel__card__imgContainer__img} style={{backgroundImage: `url(${item.img})`}}/>
                              </div>
                              <div className={classes.Carousel__card__info}>
                                <p className={classes.Carousel__card__info__label}>{item.label}</p>
                                <div className={classes.Carousel__card__info__center}>
                                  <p className={classes.Carousel__card__info__center__text}>{item.meters} м²</p>
                                  <p className={classes.Carousel__card__info__center__text}>{item.rooms} комн.</p>
                                </div>
                                <p className={classes.Carousel__card__info__price}>{currency==="$"?item.price*daysDifference:item.price*80*daysDifference} {currency}</p>
                              </div>
                            </div>
                        ))
                    }
                </div>
            }/> 
        </div>
        
    );
};

export default HotelsCards;