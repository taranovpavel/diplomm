import {React, useState} from 'react';
import { useSelector } from 'react-redux';

import dataBooking from '../data/book.json'
import classes from './Services.module.sass'
import Container from './Container';

import img_breakfast from '../images/img-breakfast.webp'

const Services = ({data,dataSecond,days,currency,book,setPage,setBook}) => {
    const {lang} = useSelector(state => state.HeaderReducer)
    const formatStay =(n)=> {
        let nights
        if(lang==="ru"){nights = n % 10 === 1 && n % 100 !== 11 ? "ночь" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? "ночи" : "ночей"}
        else if (lang==="en"){nights=n>1?"nights":"night"}
        else{nights="түн"}
        return `${n} ${nights}`
    }
    const formatNum =(number)=> {return number.toLocaleString('ru-RU')}
    if(dataSecond!==undefined){
        if((book.label===undefined)||((book.label!==data.label)&&(book.label!==dataSecond.label))){
            book.label=data.label
            book.text=data.text
            book.price=data.price
            book.breakfastPrice=0
        }
    }else{
        if((book.label===undefined)||(book.label!==data.label)){
            book.label=data.label
            book.text=data.text
            book.price=data.price
            book.breakfastPrice=0
        }
    }
    const [isImprove,setIsImprove] = useState(dataSecond?book.label===dataSecond.label:false)
    const [isBreakfast,setIsBreakfast] = useState(book.breakfastPrice===10)
    const breakfastPrice = 10
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__hotel}>
                        <div className={classes.Main__inner__hotel__img} style={{backgroundImage: `url(${data.img})`}}/>
                        <div className={classes.Main__inner__hotel__info}>
                            <p className={classes.Main__inner__hotel__info__label}>{data.label[lang]}</p>
                            <div className={classes.Main__inner__hotel__info__bottom}>
                                <p className={classes.Main__inner__hotel__info__bottom__text}>{dataBooking.upTo[lang]} {data.people} {dataBooking.places[lang]}</p>
                                <p className={classes.Main__inner__hotel__info__bottom__text}>{data.meters} м²</p>
                                <p className={classes.Main__inner__hotel__info__bottom__text}>{data.rooms} {dataBooking.roomShort[lang]}</p>
                            </div>
                            <p className={classes.Main__inner__hotel__info__about}>{data.text[lang]}</p>
                            <p className={classes.Main__inner__hotel__info__about}>{dataBooking.roomAmenities[lang]}</p>
                        </div>
                    </div>
                    {
                        dataSecond!==undefined?
                        <div className={classes.Main__inner__hotelImprove}>
                            <div className={classes.Main__inner__hotelImprove__label}> 
                                <div className={classes.Main__inner__hotelImprove__label__arrow}>▲</div>
                                <p>{dataBooking.comfortUpgrade[lang]}</p>
                            </div>
                            <div className={classes.Main__inner__hotelImprove__inner}>
                                <div className={classes.Main__inner__hotelImprove__inner__img} style={{backgroundImage: `url(${dataSecond.img})`}}/>
                                <div className={classes.Main__inner__hotelImprove__inner__info}>
                                    <p className={classes.Main__inner__hotelImprove__inner__info__label}>{dataSecond.label[lang]}</p>
                                    <div className={classes.Main__inner__hotelImprove__inner__info__bottom}>
                                        <p className={classes.Main__inner__hotelImprove__inner__info__bottom__text}>{dataBooking.upTo[lang]} {dataSecond.people} {dataBooking.places[lang]}</p>
                                        <p className={classes.Main__inner__hotelImprove__inner__info__bottom__text}>{dataSecond.meters} м²</p>
                                        <p className={classes.Main__inner__hotelImprove__inner__info__bottom__text}>{dataSecond.rooms} {dataBooking.roomShort[lang]}</p>
                                    </div>
                                    <p className={classes.Main__inner__hotelImprove__inner__info__about}>{dataSecond.text[lang]}</p>
                                    <p className={classes.Main__inner__hotelImprove__inner__info__about}>{dataBooking.roomAmenities[lang]}</p>
                                </div>
                            </div>
                                {!isImprove?
                                    <div className={classes.Main__inner__hotelImprove__bottom}>
                                        <div className={classes.Main__inner__hotelImprove__bottom__left}>
                                            <p className={classes.Main__inner__hotelImprove__bottom__left__price}>+ {formatNum(currency==="$"?dataSecond.price*days-data.price*days:dataSecond.price*days*80-data.price*days*80)} {currency}</p>
                                            <p className={classes.Main__inner__hotelImprove__bottom__left__text}>{dataBooking.for[lang]} {formatStay(days)}</p>
                                        </div>
                                        <button onClick={(()=>{setIsImprove(true);book.label=dataSecond.label;book.price=dataSecond.price})} className={classes.Main__inner__hotelImprove__bottom__btn}>{dataBooking.comfortUpgrade[lang]}</button>
                                    </div>
                                    :
                                    <div className={classes.Main__inner__hotelImprove__bottomS}>
                                        <p className={classes.Main__inner__hotelImprove__bottomS__text}>✓ {dataBooking.yourRoomUpdated[lang]}</p>
                                        <p className={classes.Main__inner__hotelImprove__bottomS__btn} onClick={(()=>{setIsImprove(false);book.label=data.label; book.price=data.price})}>{dataBooking.returnPreviousChoice[lang]}</p>
                                    </div>
                                }
                        </div>
                        :
                        ""
                    }
                    <div className={classes.Main__inner__breakfast}>
                        <div className={classes.Main__inner__breakfast__img} style={{backgroundImage: `url(${img_breakfast})`}}/>
                        <div className={classes.Main__inner__breakfast__info}>
                            <p className={classes.Main__inner__breakfast__info__label}>{dataBooking.breakfastOne[lang]}</p>
                            <p className={classes.Main__inner__breakfast__info__about}>{dataBooking.breakfastDesc[lang]}</p>
                        </div>
                    </div>
                        {!isBreakfast?
                            <div className={classes.Main__inner__breakfast__bottom}>
                                <div className={classes.Main__inner__breakfast__bottom__left}>
                                    <p className={classes.Main__inner__breakfast__bottom__left__price}>+ {formatNum(currency==="$"?breakfastPrice*days:breakfastPrice*days*80)} {currency}</p>
                                    <p className={classes.Main__inner__breakfast__bottom__left__text}>{dataBooking.for[lang]} {formatStay(days)}</p>
                                </div>
                                <button onClick={(()=>{setIsBreakfast(true);book.breakfastPrice=breakfastPrice})} className={classes.Main__inner__hotelImprove__bottom__btn}>{dataBooking.continue[lang]}</button>
                            </div>
                            :
                            <div className={classes.Main__inner__breakfast__bottomS}>
                                <p className={classes.Main__inner__breakfast__bottomS__text}>✓ {dataBooking.yourRoomUpdated[lang]}</p>
                                <p className={classes.Main__inner__breakfast__bottomS__btn} onClick={(()=>{setIsBreakfast(false);book.breakfastPrice=0})}>{dataBooking.returnPreviousChoice[lang]}</p>
                            </div>
                        }
                    <div className={classes.Main__inner__bill}>
                        <p className={classes.Main__inner__bill__label}>{dataBooking.yourBooking[lang]}</p>
                        <div className={classes.Main__inner__bill__days}><p>{formatStay(days)}</p></div>
                        <div className={classes.Main__inner__bill__date}>
                            <div className={classes.Main__inner__bill__date__inner}>
                                <div className={classes.Main__inner__bill__date__inner__top}>
                                    <div className={classes.Main__inner__bill__date__inner__top__left}>
                                        <p className={classes.Main__inner__bill__date__inner__top__left__num}>{book.numFrom}</p>
                                        <p className={classes.Main__inner__bill__date__inner__top__left__months}>{book.monthFrom}</p>
                                    </div>
                                    <div className={classes.Main__inner__bill__date__inner__top__line}/>
                                </div>
                                <p>{book.dayFrom}</p>
                                <p>{dataBooking.from[lang]} 15:00</p>
                            </div>
                            <div className={classes.Main__inner__bill__date__inner}>
                                <div className={classes.Main__inner__bill__date__inner__top}>
                                    <div className={classes.Main__inner__bill__date__inner__top__left}>
                                        <p className={classes.Main__inner__bill__date__inner__top__left__num}>{book.numTo}</p>
                                        <p className={classes.Main__inner__bill__date__inner__top__left__months}>{book.monthTo}</p>
                                    </div>
                                </div>
                                <p>{book.dayTo}</p>
                                <p>{dataBooking.upTo[lang]} 15:00</p>
                            </div>
                        </div>
                        <div/>
                        <p>{dataBooking.room[lang]}: {book.label[lang]}</p>
                        {isBreakfast?
                            <>
                                <p>{dataBooking.room[lang]}: {formatNum(currency==="$"?book.price*days:book.price*days*80)}  {currency}</p>
                                <p>{dataBooking.breakfast[lang]}: {formatNum(currency==="$"?breakfastPrice*days:breakfastPrice*days*80)}  {currency}</p>
                            </> 
                            :
                            ""                       
                        }
                        <p>{dataBooking.total[lang]}: {formatNum(currency==="$"?(book.price+book.breakfastPrice)*days:(book.price+book.breakfastPrice)*days*80)} {currency}</p>
                        <button onClick={(()=>{setPage(2)})} className={classes.Main__inner__bill__btn}>{dataBooking.continue[lang]}</button>
                    </div>
                </div>
            }/> 
        </div>
    );
};

export default Services;