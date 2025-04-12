import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setIsModal} from "../redux/HeaderSlice";

import classes from './ModalPage.module.sass'
import dataModal from '../data/modal.json'

const ModalPage = () => {
    const dispatch = useDispatch()
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Main}>
            <div className={classes.Main__inner}>
                <div className={classes.Main__inner__logo}><p>✔</p></div>
                <div className={classes.Main__inner__info}>
                    <p className={classes.Main__inner__info__text}>{dataModal.bookingSuccess[lang]}</p>
                    <Link onClick={(()=>{dispatch(setIsModal())})} to={"/"} className={classes.Main__inner__info__btn}>{dataModal.goToHome[lang]}</Link>
                </div>
            </div>
        </div>
    );
};

export default ModalPage;