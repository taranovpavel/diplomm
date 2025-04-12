import {React,useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Date from '../components/Date';
import HotelsCards from '../components/HotelsCards';
import Line from '../components/Line';
import Services from '../components/Services';
import Bill from '../components/Bill';
import ModalPage from '../components/ModalPage';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import dataBooking from '../data/book.json'
import bishkek from '../data/bishkekHotels.json'
import naryn from '../data/narynHotels.json'
import issykKul from '../data/issyk-kulHotels.json'

const BookBishkekPage = () => {
    window.scrollTo(0, 0);
    const {lang,isModal} = useSelector(state => state.HeaderReducer)
    const [daysDifference, setDaysDifference] = useState(null);
    const [currency, setCurrency] = useState("c");
    const [room, setRoom] = useState(null)
    const [firstDate, setFirstDate] = useState(dayjs()); // Дата из первого пикера
    const [secondDate, setSecondDate] = useState(dayjs().add(1, 'day')); // Дата из второго пикера
    const [page, setPage] = useState(0)
    const location = useLocation().pathname
    const data = location==="/book/bishkek"?bishkek:location==="/book/naryn"?naryn:issykKul
    const monthNames = dataBooking.monthNames[lang]
    const [book,setBook] = useState({
        numFrom: firstDate.date(),
        monthFrom: monthNames[dayjs(firstDate).month()],
        dayFrom: dayjs(firstDate).locale(lang).format("dddd"),
        numTo: secondDate.date(),
        monthTo: monthNames[dayjs(secondDate).month()],
        dayTo: dayjs(secondDate).locale(lang).format("dddd"),
        breakfastPrice: 0
    })  
    useEffect(() => {
        setBook(prev => ({
          ...prev,
          numFrom: firstDate.date(),
          monthFrom: monthNames[dayjs(firstDate).month()],
          dayFrom: dayjs(firstDate).locale(lang).format("dddd"),
          numTo: secondDate.date(),
          monthTo: monthNames[dayjs(secondDate).month()],
          dayTo: dayjs(secondDate).locale(lang).format("dddd"),
        }));
      }, [firstDate, secondDate, lang]);
    return (
        <div>
            <Header isBlack={true}/>
            <Date isReadOnly={page!==0} firstDate={firstDate} secondDate={secondDate} setFirstDate={setFirstDate} setSecondDate={setSecondDate} daysDifference={daysDifference} setDaysDifference={setDaysDifference} currency={currency} setCurrency={setCurrency}/>
            <Line setPage={setPage} page={page} text={dataBooking.steps[lang]}/>
            {
             page===0?<HotelsCards setRoom={setRoom} setPage={setPage} data={data} currency={currency} daysDifference={daysDifference}/>:
             page===1?<Services setBook={setBook}  setPage={setPage} book={book} currency={currency} days={daysDifference} dataSecond={data[room+1]} data={data[room]}/>:
             <Bill book={book} currency={currency} days={daysDifference}/>
            }
            {isModal?<ModalPage/>:""}
            <Footer/>
        </div>
    );
};

export default BookBishkekPage;