import React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from "@mui/material/FormControl";
import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import classes from './Biil.module.sass'
import countries from '../data/countryRu.json';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormHelperText } from '@mui/material';
import { ReactComponent as Visa} from "../images/icon-visa.svg"
import { ReactComponent as Mir} from "../images/icon-mir.svg"
import { ReactComponent as Mastercard} from "../images/icon-mastercard.svg"

const Bill = ({book,days,currency,}) => {
    const [value, setValue] = useState({surname:"", name:"", number:"", email:"", citizenship: "", checkbox: false});
    const [isError, setIsError] = useState({surname:true, name:true, number:true, email:true, citizenship:true, checkbox: true});
    const regex = {surname: /^[A-Za-zА-Яа-яЁё]{3,}$/, name:/^[A-Za-zА-Яа-яЁё]{2,}$/, number:/^\+(\d{3})\s?(\(?\d{3}\)?)([-\s]?\d{2}){3}$/, email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
    const formatStay =(n)=> {
        const nights = n % 10 === 1 && n % 100 !== 11 ? "ночь" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? "ночи" : "ночей"; 
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
      };
      const formatNum =(number)=> {return number.toLocaleString('ru-RU')}
    const dataField = [
        {
            label:"Фамилия",
            value: value.surname,
            onChange: handleChange,
            error: isError.surname,
            helpText: "Минимум 3 символа",
            id: "surname"
        },
        {
            label:"Имя",
            value: value.name,
            onChange: handleChange,
            error: isError.name,
            helpText: "Минимум 2 символа",
            id: "name"
        },
        {
            label:"Номер",
            value: value.number,
            onChange: handleChange,
            error: isError.number,
            helpText: "Введите номер корректно",
            id: "number"
        },
        {
            label:"Почта",
            value: value.email,
            onChange: handleChange,
            error: isError.email,
            helpText: "Введите почту корректно",
            id: "email"
        }
    ]
    
    console.log(value);
    console.log(isError);
    return (
        <div className={classes.Main}>
            <div className={classes.Main__inner}>
                <p className={classes.Main__inner__label}>Введите свои данные</p>
                <div className={classes.Main__inner__top}>
                    {dataField.map((item,idx)=>(
                        <TextField
                            className={classes.Main__inner__top__input}
                            key={idx}
                            id={item.id}
                            label={item.label}
                            variant="filled"
                            value={item.value}
                            onChange={item.onChange}
                            error={item.error}
                            color={!item.error?"success":"error"}
                            focused
                            sx={{ width: 460 }}
                            helperText={item.error? item.helpText : ""}
                        /> 
                    ))}
                    <Autocomplete
                        className={classes.Main__inner__top__input}
                        id='citizenship'
                        disablePortal
                        value={value.citizenship}
                        onChange={handleChange}
                        color={"success"}
                        options={countries}
                        sx={{ width: 460 }}
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                focused 
                                color={!isError.citizenship?"success":"error"} 
                                variant="filled" 
                                helperText={isError.citizenship?"Заполните поле":""} 
                                error={isError.citizenship} 
                                label="Гражданство" 
                            />
                        }
                      />
                </div>
                <p className={classes.Main__inner__label}>Выберите способ опалты</p>
                <div className={classes.Main__inner__bottom}>
                    <div className={classes.Main__inner__bottom__check}>
                        <FormControlLabel  
                            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}  
                            control={
                            <Checkbox
                            checked={value.checkbox}  
                            onChange={(e)=>{setValue((prevState) => ({...prevState, checkbox: e.target.checked,}));setIsError((prevState) => ({...prevState, checkbox: !e.target.checked}))}}
                            sx={{color: '#D32F2F','&.Mui-checked': {color: '#2E7D32',}}} defaultChecked/>} 
                            label="Я согласен с правилами онлайн-бронирования, обработкой персональных данных и политикой конфиденциальности"
                            color={!isError.citizenship?"success":"error"} 
                        />
                        {isError.checkbox?<FormHelperText className={classes.Main__inner__bottom__check__text}>Вы должны согласиться</FormHelperText>:""}
                    </div>
                    
                    
                    <div className={classes.Main__inner__bottom__pay}>
                        <div className={classes.Main__inner__bottom__pay__header}>
                            <div className={classes.Main__inner__bottom__pay__header__left}>
                                <p>Самый удобный способ</p>
                            </div>
                            <div className={classes.Main__inner__bottom__pay__header__center}>
                                <p className={classes.Main__inner__bottom__pay__header__center__label}>Банковская карта</p>
                                <p className={classes.Main__inner__bottom__pay__header__center__cards}>Visa, МИР, MasterCard</p>
                            </div>
                            <div className={classes.Main__inner__bottom__pay__header__right}>
                                <Visa className={classes.Main__inner__bottom__pay__header__right__icon}/>
                                <Mir className={classes.Main__inner__bottom__pay__header__right__icon}/>
                                <Mastercard className={classes.Main__inner__bottom__pay__header__right__icon}/>
                            </div>
                        </div>
                        <div className={classes.Main__inner__bottom__pay__info}>
                            <p>Оплачивается вся сумма брони.</p>
                            <p>При бронировании номера необходимо внести полную невозмещаемую предоплату за проживание плюс налог (при неявке, отмене или изменении бронирования возврат средств не производится). </p>
                            <p>Кассовый чек и все подтверждающие документы о проживании и оказанных услугах за весь период мы отправим вам на электронную почту, указанную при бронировании.</p>
                        </div>    
                        <div className={classes.Main__inner__bottom__pay__price}>
                            <div className={classes.Main__inner__bottom__pay__price__cost}>
                                <p>предоплата: {formatNum(currency==="$"?book.price*days:book.price*days*80)} {currency}</p>
                                {/* <p>{formatNum(currency==="$"?book.price*days:book.price*days*80)} {currency}</p> */}
                            </div>
                            <button>забронировать</button>
                        </div>
                    </div>    
                </div>
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
                    {book.breakfastPrice>0?
                        <>
                            <p>Номер: {formatNum(currency==="$"?book.price*days:book.price*days*80)}  {currency}</p>
                            <p>Завтрак: {formatNum(currency==="$"?book.breakfastPrice*days:book.breakfastPrice*days*80)}  {currency}</p>
                        </> 
                        :
                        ""                       
                    }
                    <p>Итого: {formatNum(currency==="$"?(book.price+book.breakfastPrice)*days:(book.price+book.breakfastPrice)*days*80)} {currency}</p>
                </div>
            </div>
        </div>
    );
};

export default Bill;