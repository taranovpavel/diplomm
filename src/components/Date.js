import {React,useState,useEffect} from 'react';
import classes from './Date.module.sass'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Container from './Container';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale("ru")

const Date = ({ isReadOnly,firstDate, setFirstDate, secondDate, setSecondDate, setDaysDifference, currency, setCurrency}) => {
    const disablePastDates = (date) => {
        return date.isBefore(dayjs(), 'day');
    };
    const disableDatesBeforeFirstDate = (date) => {
        if (!firstDate) return false; 
        return date.isBefore(firstDate, 'day');
    };
    const disableSameDateAsFirst = (date) => {
        if (!firstDate) return false; 
        return date.isSame(firstDate, 'day');
    };
    useEffect(() => {
        if (firstDate && secondDate) {
            const diff = secondDate.diff(firstDate, 'day');
            setDaysDifference(diff); 
        } else {
            setDaysDifference(null); 
        }
    }, [firstDate, secondDate]); 
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                        <div className={classes.Main__inner__left}>
                            <DatePicker
                                label="Дата заезда"
                                value={firstDate}
                                onChange={(newValue) => {
                                    setFirstDate(newValue);
                                    setSecondDate(newValue.add(1, 'day'))
                                    // setIsSecondDatePickerEnabled(true); // Включаем второй пикер после выбора первой даты
                                }}
                                readOnly = {isReadOnly}
                                shouldDisableDate={disablePastDates} // Блокировка дат до текущего дня
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DatePicker
                                label="Дата отъезда"
                                value={secondDate}
                                readOnly = {isReadOnly}
                                onChange={(newValue) => {
                                    setSecondDate(newValue);
                                }}
                                shouldDisableDate={(date) => {
                                    return (
                                        disableDatesBeforeFirstDate(date) ||
                                        disableSameDateAsFirst(date)
                                    ); // Блокировка дат до первой выбранной даты и той же даты, что и в первом
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                // disabled={!isSecondDatePickerEnabled} // Отключаем второй пикер, если первая дата не выбрана
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