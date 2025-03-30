import {React,useState,useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Date from '../components/Date';
import hotel1 from '../images/img-hotelRoom1.jpg'
import HotelsCards from '../components/HotelsCards';



const BookBishkekPage = () => {
    const [daysDifference, setDaysDifference] = useState(1);
    const [currency, setCurrency] = useState("c");

    const photos = [
        {img: hotel1, meters: "53", label: "Премиум с террасой King", price: 300, rooms: "1"},
        {img: hotel1, meters: "53", label: "Премиум с террасой King", price: 300, rooms: "1"},
        {img: hotel1, meters: "53", label: "Премиум с террасой King", price: 300, rooms: "1"},
        {img: hotel1, meters: "53", label: "Премиум с террасой King", price: 300, rooms: "1"},
        {img: hotel1, meters: "53", label: "Премиум с террасой King", price: 300, rooms: "1"},
        {img: hotel1, meters: "53", label: "Премиум с террасой King", price: 300, rooms: "1"}
    ]
    return (
        <div>
            <Header isBlack={true}/>
            <Date daysDifference={daysDifference} setDaysDifference={setDaysDifference} currency={currency} setCurrency={setCurrency}/>
            <HotelsCards photos={photos} currency={currency} daysDifference={daysDifference}/>
            <Footer/>
        </div>
    );
};

export default BookBishkekPage;