import {React,useEffect} from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import dataBooking from '../data/book.json'
import classes from './Date.module.sass'
import Container from './Container';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import 'dayjs/locale/ru';

dayjs.locale("ru")

const Date = ({ isReadOnly,firstDate, setFirstDate, secondDate, setSecondDate, setDaysDifference, currency, setCurrency}) => {
    const {lang} = useSelector(state => state.HeaderReducer)
    const disablePastDates = (date) => {return date.isBefore(dayjs(), 'day')};
    const disableDatesBeforeFirstDate = (date) => {if (!firstDate) return false; return date.isBefore(firstDate, 'day')};
    const disableSameDateAsFirst = (date) => {if (!firstDate) return false; return date.isSame(firstDate, 'day')};
    useEffect(() => {
        if (firstDate && secondDate) {const diff = secondDate.diff(firstDate, 'day');setDaysDifference(diff)} 
        else {setDaysDifference(null)}
    }, [firstDate, secondDate])
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={lang}>
                        <div className={classes.Main__inner__left}>
                            <DatePicker
                                label={dataBooking.checkIn[lang]}
                                value={firstDate}
                                onChange={(newValue) => {
                                    setFirstDate(newValue);
                                    setSecondDate(newValue.add(1, 'day'))
                                }}
                                readOnly = {isReadOnly}
                                shouldDisableDate={disablePastDates} 
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DatePicker
                                label={dataBooking.checkOut[lang]}
                                value={secondDate}
                                readOnly = {isReadOnly}
                                onChange={(newValue) => {
                                    setSecondDate(newValue);
                                }}
                                shouldDisableDate={(date) => {
                                    return (
                                        disableDatesBeforeFirstDate(date) ||
                                        disableSameDateAsFirst(date)
                                    )
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                    </LocalizationProvider>
                    <div className={classes.Main__inner__right}>
                        <div onClick={(()=>{setCurrency("c")})} className={currency==="c"?classes.Main__inner__right__on:classes.Main__inner__right__off}>
                            <p>C</p>
                        </div>
                        <div onClick={(()=>{setCurrency("$")})}  className={currency==="$"?classes.Main__inner__right__on:classes.Main__inner__right__off}>
                            <p>$</p>
                        </div>
                        <div onClick={(()=>{setCurrency("₽")})}  className={currency==="₽"?classes.Main__inner__right__on:classes.Main__inner__right__off}>
                            <p>₽</p>
                        </div>
                    </div>
                </div>
            }/>
        </div>
    );
};

export default Date;