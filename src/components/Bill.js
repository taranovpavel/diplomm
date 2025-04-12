import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import {getPost,setIsModal} from "../redux/HeaderSlice";

import classes from './Biil.module.sass'
import countriesRu from '../data/countryRu.json';
import countriesEn from '../data/countryEn.json';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormHelperText} from '@mui/material';

import { ReactComponent as Visa} from "../images/icon-visa.svg"
import { ReactComponent as Mir} from "../images/icon-mir.svg"
import { ReactComponent as Mastercard} from "../images/icon-mastercard.svg"

import dataBooking from '../data/book.json'

const Bill = ({book,days,currency}) => {
    const {lang} = useSelector(state => state.HeaderReducer)
    const dispatch = useDispatch()
    const [value, setValue] = useState({surname:"", name:"", number:"", email:"", citizenship: "", checkbox: false});
    const [isError, setIsError] = useState({surname:true, name:true, number:true, email:true, citizenship:true, checkbox: true});
    const regex = {surname: /^[A-Za-zА-Яа-яЁё]{3,}$/, name:/^[A-Za-zА-Яа-яЁё]{2,}$/, number:/^\+(\d{3})\s?(\(?\d{3}\)?)([-\s]?\d{2}){3}$/, email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
    const formatStay =(n)=> {
        let nights
        if(lang==="ru"){nights = n % 10 === 1 && n % 100 !== 11 ? "ночь" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? "ночи" : "ночей"}
        else if (lang==="en"){nights=n>1?"nights":"night"}
        else{nights="түн"}
        return `${n} ${nights}`
    }
    const handleChange = (event,auto) => {
        const newValue = event.target.value;
        const id = event.target.id
        if(auto===undefined){
            setValue((prevState) => ({...prevState, [id]: newValue,}))
            setIsError((prevState) => ({...prevState, [id]: !regex[id]?.test(newValue),}))
        }else{
            setValue((prevState) => ({...prevState, citizenship: auto,}))
            setIsError((prevState) => ({...prevState, citizenship: auto===null}))
        }
    }
    const formatNum =(number)=> {return number.toLocaleString('ru-RU')}
    const dataField = [
        {
            label: {
                ru: "Фамилия",
                en: "Surname",
                kg: "Фамилия"
            },
            value: value.surname,
            onChange: handleChange,
            error: isError.surname,
            helpText: {
                ru: "Минимум 3 символа",
                en: "Minimum 3 characters",
                kg: "Кеминде 3 тамга"
            },
            id: "surname"
        },
        {
            label: {
                ru: "Имя",
                en: "First name",
                kg: "Аты"
            },
            value: value.name,
            onChange: handleChange,
            error: isError.name,
            helpText: {
                ru: "Минимум 2 символа",
                en: "Minimum 2 characters",
                kg: "Кеминде 2 тамга"
            },
            id: "name"
        },
        {
            label: {
                ru: "Номер",
                en: "Phone number",
                kg: "Телефон номери"
            },
            value: value.number,
            onChange: handleChange,
            error: isError.number,
            helpText: {
                ru: "Введите номер корректно",
                en: "Enter a valid number",
                kg: "Туура номер киргизиңиз"
            },
            id: "number"
        },
        {
            label: {
                ru: "Почта",
                en: "Email",
                kg: "Почта"
            },
            value: value.email,
            onChange: handleChange,
            error: isError.email,
            helpText: {
                ru: "Введите почту корректно",
                en: "Enter a valid email",
                kg: "Туура почта киргизиңиз"
            },
            id: "email"
        }
    ]
    const post = () =>{
        let errors = 0
        for(const key in isError){if (isError[key]){errors+=1}}
        if(errors===0){
            dispatch(getPost(`ФИО:  ${value.name} ${value.surname}%0AНомер:  ${value.number}%0AПочта:  ${value.email}%0AГражданство:  ${value.citizenship}%0A%0AНомер:  ${book.label.en} %0AБронь с ${book.numFrom} ${book.monthFrom} до ${book.numTo} ${book.monthTo}%0AЦена завтрака ${book.breakfastPrice}%0AИтого: ${book.price} $`))
            dispatch(setIsModal())
        }
    }

    return (
        <div className={classes.Main}>
            <div className={classes.Main__inner}>
                <div className={classes.Main__inner__top}>
                    {dataField.map((item,idx)=>(
                        <TextField
                            className={classes.Main__inner__top__input}
                            key={idx}
                            id={item.id}
                            label={item.label[lang]}
                            variant="filled"
                            value={item.value}
                            onChange={item.onChange}
                            error={item.error}
                            color={!item.error?"success":"error"}
                            focused
                            sx={{ width: 460 }}
                            helperText={item.error? item.helpText[lang] : ""}
                        /> 
                    ))}
                    <Autocomplete
                        className={classes.Main__inner__top__input}
                        id='citizenship'
                        disablePortal
                        value={value.citizenship}
                        onChange={handleChange}
                        color={"success"}
                        options={lang==="en"?countriesEn:countriesRu}
                        sx={{ width: 460 }}
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                focused 
                                color={!isError.citizenship?"success":"error"} 
                                variant="filled" 
                                helperText={isError.citizenship?dataBooking.fillField[lang]:""} 
                                error={isError.citizenship} 
                                label={dataBooking.citizenship[lang]} 
                            />
                        }
                      />
                </div>
                <p className={classes.Main__inner__label}>{dataBooking.choosePayment[lang]}</p>
                <div className={classes.Main__inner__bottom}>
                    <div className={classes.Main__inner__bottom__check}>
                        <FormControlLabel  
                            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}  
                            control={
                            <Checkbox
                            checked={value.checkbox}  
                            onChange={(e)=>{setValue((prevState) => ({...prevState, checkbox: e.target.checked,}));setIsError((prevState) => ({...prevState, checkbox: !e.target.checked}))}}
                            sx={{color: '#D32F2F','&.Mui-checked': {color: '#2E7D32',}}} defaultChecked/>} 
                            label={dataBooking.agreementText[lang]}
                            color={!isError.citizenship?"success":"error"} 
                        />
                        {isError.checkbox?<FormHelperText className={classes.Main__inner__bottom__check__text}>{dataBooking.mustAgree[lang]}</FormHelperText>:""}
                    </div>
                    
                    
                    <div className={classes.Main__inner__bottom__pay}>
                        <div className={classes.Main__inner__bottom__pay__header}>
                            <div className={classes.Main__inner__bottom__pay__header__left}>
                                <p>{dataBooking.mostConvenient[lang]}</p>
                            </div>
                            <div className={classes.Main__inner__bottom__pay__header__center}>
                                <p className={classes.Main__inner__bottom__pay__header__center__label}>{dataBooking.bankCard[lang]}</p>
                                <p className={classes.Main__inner__bottom__pay__header__center__cards}>Visa, МИР, MasterCard</p>
                            </div>
                            <div className={classes.Main__inner__bottom__pay__header__right}>
                                <Visa className={classes.Main__inner__bottom__pay__header__right__icon}/>
                                <Mir className={classes.Main__inner__bottom__pay__header__right__icon}/>
                                <Mastercard className={classes.Main__inner__bottom__pay__header__right__icon}/>
                            </div>
                        </div>
                        <div className={classes.Main__inner__bottom__pay__info}>
                            {dataBooking.paymentPolicy[lang].map((item,idx)=>(
                                <p key={idx}>{item}</p>
                            ))}
                        </div>    
                        <div className={classes.Main__inner__bottom__pay__price}>
                            <div className={classes.Main__inner__bottom__pay__price__cost}>
                                {lang==="kg"?
                                    <>
                                        <p>{dataBooking.prepayment[lang]}</p>
                                        <p>{formatNum(currency==="$"?book.price*days:book.price*days*80)} {currency}</p>
                                    </>
                                :
                                    <p>{dataBooking.prepayment[lang]} {formatNum(currency==="$"?book.price*days:book.price*days*80)} {currency}</p>
                                }
                            </div>
                            <button onClick={(()=>{post()})}>{dataBooking.bookNow[lang]}</button>
                        </div>
                    </div>    
                </div>
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
                    {book.breakfastPrice>0?
                        <>
                            <p>{dataBooking.room[lang]}: {formatNum(currency==="$"?book.price*days:book.price*days*80)}  {currency}</p>
                            <p>{dataBooking.breakfast[lang]}: {formatNum(currency==="$"?book.breakfastPrice*days:book.breakfastPrice*days*80)}  {currency}</p>
                        </> 
                        :
                        ""                       
                    }
                    <p>{dataBooking.total[lang]}: {formatNum(currency==="$"?(book.price+book.breakfastPrice)*days:(book.price+book.breakfastPrice)*days*80)} {currency}</p>
                </div>
            </div>
        </div>
    );
};

export default Bill;