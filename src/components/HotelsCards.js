import React from 'react';
import classes from './HotelsCards.module.sass'
import Container from './Container';

const HotelsCards = ({data,currency,daysDifference,setPage,setRoom}) => {
  const formatNum =(number)=> {
    return number.toLocaleString('ru-RU')
  }
  const days = daysDifference===null?1:daysDifference
    return (
        <div className={classes.Carousel}>
            <Container inner={
                <div className={classes.Carousel__inner}>
                    {
                        data.map((item,idx) => (
                            <div onClick = {(()=>{setRoom(idx);setPage(1);})} key={idx} className={classes.Carousel__card}>
                              <div className={classes.Carousel__card__imgContainer}>
                                <div className={classes.Carousel__card__imgContainer__img} style={{backgroundImage: `url(${item.img})`}}/>
                              </div>
                              <div className={classes.Carousel__card__info}>
                                <p className={classes.Carousel__card__info__label}>{item.label}</p>
                                <div className={classes.Carousel__card__info__top}>
                                  <p className={classes.Carousel__card__info__top__text}>до {item.people} мест</p>
                                  <p className={classes.Carousel__card__info__top__text}>{item.meters} м²</p>
                                  <p className={classes.Carousel__card__info__top__text}>{item.rooms} комн.</p>
                                </div>
                                <div className={classes.Carousel__card__info__bottom}>
                                  <p      className={classes.Carousel__card__info__bottom__price}>{formatNum(currency==="$"?item.price*days:item.price*80*days)} {currency}</p>  
                                  <button className={classes.Carousel__card__info__bottom__btn}>выбрать</button>
                                </div>                       
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