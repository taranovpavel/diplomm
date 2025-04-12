import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux';
import { setIsLang, setIsMenu, setLang } from '../redux/HeaderSlice';

import dataRoutes from '../data/routes.json'
import classes from './Header.module.sass';
import Container from './Container';

import { ReactComponent as Logo} from "../images/icon-logoWhiteText.svg"
import { ReactComponent as World} from "../images/icon-world.svg"
import { ReactComponent as Cross} from "../images/icon-Cross.svg"

const Header = ({isBlack = false}) => {
    const {lang, isLang, isMenu} = useSelector(state => state.HeaderReducer)
    const dispatch = useDispatch()
    if(isMenu){
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }
    return (
        <div className={classes.Header} style={{backgroundColor: `${isMenu?"#111":""}`,backgroundColor: `${isBlack?"#111":""}`}} >
            <Container inner = {
                <div className={classes.Header__inner}>
                    <button onClick={()=>{dispatch(setIsMenu())}} className={classes.Header__inner__menu}>{dataRoutes.label[lang]}</button>

                    <div className={classes.Header__inner__line_L}/>

                    <Link to={"/"}><Logo className={classes.Header__inner__logo}/></Link>

                    <div className={classes.Header__inner__line_R}/>

                    <div className={classes.Header__inner__right}>
                        <div onMouseEnter={()=>{dispatch(setIsLang())}} onMouseLeave={()=>{dispatch(setIsLang())}} className={classes.Header__inner__right__translate}>
                            <div  className={classes.Header__inner__right__translate__active}>
                                <World className={classes.Header__inner__right__translate__active__icon}/>
                                <p className={classes.Header__inner__right__translate__active__var}>{lang.toUpperCase()}</p>
                            </div>
                            <p onClick={()=>{dispatch(setLang(lang==="ru"?"en":"ru"))}} className={isLang?"var_on":"var_off"}>{lang==="ru"?"EN":"RU"}</p>
                            <p onClick={()=>{dispatch(setLang(lang==="kg"?"en":"kg"))}} className={isLang?"var_on":"var_off"}>{lang==="kg"?"EN":"KG"}</p>
                        </div>
                        <Link to="/book" className={classes.Header__inner__right__button}>{dataRoutes.btn[lang]}</Link>
                    </div>
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
                        {dataRoutes.routes.map((item,idx)=>(
                            <Link onClick={()=>{dispatch(setIsMenu())}} to={item.path} key={idx} className={classes.Header__menu__inner__list__li}>
                                <p>{item.label[lang]}</p>
                                <div className={classes.Header__menu__inner__list__li__br}/>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;