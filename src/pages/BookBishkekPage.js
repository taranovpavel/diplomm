import {React,useState,useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Date from '../components/Date';
import hotel1 from '../images/img-hotelRoom1.jpg'
import HotelsCards from '../components/HotelsCards';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Line from '../components/Line';
import Services from '../components/Services';
import Bill from '../components/Bill';
dayjs.locale('ru');


const BookBishkekPage = () => {
    const [daysDifference, setDaysDifference] = useState(null);
    const [currency, setCurrency] = useState("c");
    const [room, setRoom] = useState(null)
    const [firstDate, setFirstDate] = useState(dayjs()); // Дата из первого пикера
    const [secondDate, setSecondDate] = useState(dayjs().add(1, 'day')); // Дата из второго пикера
    const [page, setPage] = useState(0)
    const [isImprove,setIsImprove] = useState(false)
    const [isBreakfast,setIsBreakfast] = useState(false)
    const data = [
        {img: hotel1, people: 2, meters: "53", label: "Премиум с террасой King Премиум с террасой King Премиум с террасой King", price: 300, rooms: "1"},
        {img: hotel1, people: 2, meters: "53", label: "1", price: 3000, rooms: "1"},
        {img: hotel1, people: 2, meters: "53", label: "2", price: 300, rooms: "1"},
        {img: hotel1, people: 2, meters: "53", label: "3", price: 300, rooms: "1"},
        {img: hotel1, people: 2, meters: "53", label: "4", price: 300, rooms: "1"},
        {img: hotel1, people: 2, meters: "53", label: "5", price: 300, rooms: "1"}
    ]
    
    const text = ["Выберите номер","Закажите услуги","Введите свои данные"]
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня","июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const [book,setBook] = useState({
        numFrom: firstDate.date(),
        monthFrom: monthNames[dayjs(firstDate).month()],
        dayFrom: dayjs(firstDate).locale("ru").format("dddd"),
        numTo: secondDate.date(),
        monthTo: monthNames[dayjs(secondDate).month()],
        dayTo: dayjs(secondDate).locale("ru").format("dddd"),
        breakfastPrice: 0
    })  
    // const book = {
    //     numFrom: firstDate.date(),
    //     monthFrom: monthNames[dayjs(firstDate).month()],
    //     dayFrom: dayjs(firstDate).locale("ru").format("dddd"),
    //     numTo: secondDate.date(),
    //     monthTo: monthNames[dayjs(secondDate).month()],
    //     dayTo: dayjs(secondDate).locale("ru").format("dddd")
    // }
    // isBreakfast={isBreakfast} setIsBreakfast={setIsBreakfast} isImprove={isImprove} setIsImprove={setIsImprove}
    console.log(book);
    return (
        <div>
            <Header isBlack={true}/>
            <button onClick={(()=>setPage(page-1))}>минус</button>
            <button onClick={(()=>setPage(page+1))}>плюс</button>
            <Date isReadOnly={page!==0} firstDate={firstDate} secondDate={secondDate} setFirstDate={setFirstDate} setSecondDate={setSecondDate} daysDifference={daysDifference} setDaysDifference={setDaysDifference} currency={currency} setCurrency={setCurrency}/>
            <Line setPage={setPage} page={page} text={text}/>
            {
             page===0?<HotelsCards setRoom={setRoom} setPage={setPage} data={data} currency={currency} daysDifference={daysDifference}/>:
             page===1?<Services setBook={setBook}  setPage={setPage} book={book} currency={currency} days={daysDifference} dataSecond={data.length<room+1?false:data[room+1]} data={data[room]}/>:
             <Bill/>
            }
            
            <Footer/>
        </div>
    );
};

export default BookBishkekPage;