import {React, useState} from 'react';
import classes from './Services.module.sass'
import Container from './Container';
const Services = ({data,dataSecond,days,currency,book,setPage,setBook}) => {
    const formatStay =(n)=> {
        const nights = n % 10 === 1 && n % 100 !== 11 ? "ночь" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? "ночи" : "ночей"; 
        return `${n} ${nights}`
    }
    
    const formatNum =(number)=> {return number.toLocaleString('ru-RU')}
    console.log(dataSecond);
    if(dataSecond!==undefined){
        if((book.label===undefined)||((book.label!==data.label)&&(book.label!==dataSecond.label))){
            book.label=data.label
            book.price=data.price
            book.breakfastPrice=0
        }
    }else{
        if((book.label===undefined)||(book.label!==data.label)){
            book.label=data.label
            book.price=data.price
            book.breakfastPrice=0
        }
    }
    const [isImprove,setIsImprove] = useState(dataSecond?book.label===dataSecond.label:false)
    const [isBreakfast,setIsBreakfast] = useState(book.breakfastPrice===10)
    const breakfastPrice = 10
    console.log(book);
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__hotel}>
                        <div className={classes.Main__inner__hotel__img} style={{backgroundImage: `url(${data.img})`}}/>
                        <div className={classes.Main__inner__hotel__info}>
                            <p className={classes.Main__inner__hotel__info__label}>{data.label}</p>
                            <div className={classes.Main__inner__hotel__info__bottom}>
                                <p className={classes.Main__inner__hotel__info__bottom__text}>до {data.people} мест</p>
                                <p className={classes.Main__inner__hotel__info__bottom__text}>{data.meters} м²</p>
                                <p className={classes.Main__inner__hotel__info__bottom__text}>{data.rooms} комн.</p>
                            </div>
                            <p className={classes.Main__inner__hotel__info__about}>В каждом номере: Smart TV, Wi-Fi, кондиционер, мини-холодильник, сейф, кофемашина, ванна и душ, King-size кровать, мебель, мини-бар, СПА и многое другое.</p>
                        </div>
                    </div>
                    {
                        dataSecond!==undefined?
                        <div className={classes.Main__inner__hotelImprove}>
                            <div className={classes.Main__inner__hotelImprove__label}> 
                                <div className={classes.Main__inner__hotelImprove__label__arrow}>▲</div>
                                <p>Повысить комфорт</p>
                            </div>
                            <div className={classes.Main__inner__hotelImprove__inner}>
                                <div className={classes.Main__inner__hotelImprove__inner__img} style={{backgroundImage: `url(${dataSecond.img})`}}/>
                                <div className={classes.Main__inner__hotelImprove__inner__info}>
                                    <p className={classes.Main__inner__hotelImprove__inner__info__label}>{dataSecond.label}</p>
                                    <div className={classes.Main__inner__hotelImprove__inner__info__bottom}>
                                        <p className={classes.Main__inner__hotelImprove__inner__info__bottom__text}>до {dataSecond.people} мест</p>
                                        <p className={classes.Main__inner__hotelImprove__inner__info__bottom__text}>{dataSecond.meters} м²</p>
                                        <p className={classes.Main__inner__hotelImprove__inner__info__bottom__text}>{dataSecond.rooms} комн.</p>
                                    </div>
                                    <p className={classes.Main__inner__hotelImprove__inner__info__about}>В каждом номере: Smart TV, Wi-Fi, кондиционер, мини-холодильник, сейф, кофемашина, ванна и душ, King-size кровать, мебель, мини-бар, СПА и многое другое.</p>
                                </div>
                            </div>
                                {!isImprove?
                                    <div className={classes.Main__inner__hotelImprove__bottom}>
                                        <div className={classes.Main__inner__hotelImprove__bottom__left}>
                                            <p className={classes.Main__inner__hotelImprove__bottom__left__price}>+ {formatNum(currency==="$"?dataSecond.price*days-data.price*days:dataSecond.price*days*80-data.price*days*80)} {currency}</p>
                                            <p className={classes.Main__inner__hotelImprove__bottom__left__text}>за {formatStay(days)}</p>
                                        </div>
                                        <button onClick={(()=>{setIsImprove(true);book.label=dataSecond.label;book.price=dataSecond.price})} className={classes.Main__inner__hotelImprove__bottom__btn}>улучшить номер</button>
                                    </div>
                                    :
                                    <div className={classes.Main__inner__hotelImprove__bottomS}>
                                        <p className={classes.Main__inner__hotelImprove__bottomS__text}>✓ Ваш номер обновлен</p>
                                        <p className={classes.Main__inner__hotelImprove__bottomS__btn} onClick={(()=>{setIsImprove(false);book.label=data.label; book.price=data.price})}>Вернуть предыдущий выбор</p>
                                    </div>
                                }
                        </div>
                        :
                        ""
                    }
                    <div className={classes.Main__inner__breakfast}>
                        <div className={classes.Main__inner__breakfast__img} style={{backgroundImage: `url(${data.img})`}}/>
                        <div className={classes.Main__inner__breakfast__info}>
                            <p className={classes.Main__inner__breakfast__info__label}>Завтрак на одну персону</p>
                            <p className={classes.Main__inner__breakfast__info__about}>Завтрак в элегантном ресторане "Гранд Лаунж" – утончённое начало дня в изысканной атмосфере.</p>
                        </div>
                    </div>
                        {!isBreakfast?
                            <div className={classes.Main__inner__breakfast__bottom}>
                                <div className={classes.Main__inner__breakfast__bottom__left}>
                                    <p className={classes.Main__inner__breakfast__bottom__left__price}>+ {formatNum(currency==="$"?breakfastPrice*days:breakfastPrice*days*80)} {currency}</p>
                                    <p className={classes.Main__inner__breakfast__bottom__left__text}>за {formatStay(days)}</p>
                                </div>
                                <button onClick={(()=>{setIsBreakfast(true);book.breakfastPrice=breakfastPrice})} className={classes.Main__inner__hotelImprove__bottom__btn}>добавить</button>
                            </div>
                            :
                            <div className={classes.Main__inner__breakfast__bottomS}>
                                <p className={classes.Main__inner__breakfast__bottomS__text}>✓ Ваш номер обновлен</p>
                                <p className={classes.Main__inner__breakfast__bottomS__btn} onClick={(()=>{setIsBreakfast(false);book.breakfastPrice=0})}>Вернуть предыдущий выбор</p>
                            </div>
                        }
                    <div className={classes.Main__inner__bill}>
                        <p className={classes.Main__inner__bill__label}>Ваша бронь</p>
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
                                <p>c 15:00</p>
                            </div>
                            <div className={classes.Main__inner__bill__date__inner}>
                                <div className={classes.Main__inner__bill__date__inner__top}>
                                    <div className={classes.Main__inner__bill__date__inner__top__left}>
                                        <p className={classes.Main__inner__bill__date__inner__top__left__num}>{book.numTo}</p>
                                        <p className={classes.Main__inner__bill__date__inner__top__left__months}>{book.monthTo}</p>
                                    </div>
                                </div>
                                <p>{book.dayTo}</p>
                                <p>до 15:00</p>
                            </div>
                        </div>
                        <div/>
                        <p>Номер: {book.label}</p>
                        {isBreakfast?
                            <>
                                <p>Номер: {formatNum(currency==="$"?book.price*days:book.price*days*80)}  {currency}</p>
                                <p>Завтрак: {formatNum(currency==="$"?breakfastPrice*days:breakfastPrice*days*80)}  {currency}</p>
                            </> 
                            :
                            ""                       
                        }
                        <p>Итого: {formatNum(currency==="$"?(book.price+book.breakfastPrice)*days:(book.price+book.breakfastPrice)*days*80)} {currency}</p>
                        <button onClick={(()=>{setPage(2)})} className={classes.Main__inner__bill__btn}>продолжить</button>
                    </div>
                </div>
            }/> 
        </div>
    );
};

export default Services;