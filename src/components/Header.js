import React from 'react';
import Container from './Container';
import classes from './Header.module.sass';
import {Link} from "react-router-dom";
import { ReactComponent as Logo} from "../images/icon-logoWhiteText.svg"
import { ReactComponent as World} from "../images/icon-world.svg"
import { ReactComponent as Cross} from "../images/icon-Cross.svg"
import { useDispatch , useSelector } from 'react-redux';
import { setIsLang, setIsMenu, setLang } from '../redux/HeaderSlice';
import { useNavigate } from "react-router-dom"
const Header = ({isBlack = false}) => {
    const {lang, isLang, isMenu} = useSelector(state => state.HeaderReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const names = ["главная","наши отели","лучшие номера","рестораны","мероприятия","контакты","о нас"]
    if(isMenu){
        document.body.style.overflow = "hidden";
        // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        // document.body.style.paddingRight = `${scrollbarWidth}px`;
    }else{
        document.body.style.overflow = "auto"
        // document.body.style.paddingRight = `0px`
    }
    return (
        <div className={classes.Header} style={{backgroundColor: `${isMenu?"#111":""}`,backgroundColor: `${isBlack?"#111":""}`}} >
            <Container inner = {
                <div className={classes.Header__inner}>
                    <button onClick={()=>{dispatch(setIsMenu())}} className={classes.Header__inner__menu}>Меню</button>
                    <div className={classes.Header__inner__line_L}/>
                    <Link to={"/"}><Logo className={classes.Header__inner__logo}/></Link>
                    <div className={classes.Header__inner__line_R}/>
                    <div onMouseEnter={()=>{dispatch(setIsLang())}} onMouseLeave={()=>{dispatch(setIsLang())}} className={classes.Header__inner__translate}>
                        <div  className={classes.Header__inner__translate__active}>
                            <World className={classes.Header__inner__translate__active__icon}/>
                            <p className={classes.Header__inner__translate__active__var}>{lang}</p>
                        </div>
                        <p onClick={()=>{dispatch(setLang("EN"));dispatch(setIsLang());navigate("/en")}} className={isLang?"var_on":"var_off"}>EN</p>
                        <p onClick={()=>{dispatch(setLang("KG"));dispatch(setIsLang());navigate("/kg")}} className={isLang?"var_on":"var_off"}>KG</p>
                    </div>
                    <button className={classes.Header__inner__button}>Забронировать</button>
                </div>
            }/>
            <div className={isMenu?classes.Header__menu:classes.Header__menu__off}>
                <div className={classes.Header__menu__inner}>
                    <Cross onClick={()=>{dispatch(setIsMenu())}} className={classes.Header__menu__inner__cross}/>
                    <div className={classes.Header__menu__inner__name}>
                        <p>JILDIZ IMPERIAL HOTELS</p>
                        <div className={classes.Header__menu__inner__name__br}/>
                    </div>
                    <ul className={classes.Header__menu__inner__list}>
                        {names.map((item,idx)=>(
                            <li id={idx} className={classes.Header__menu__inner__list__li}>
                                <p>{item}</p>
                                <div className={classes.Header__menu__inner__list__li__br}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;