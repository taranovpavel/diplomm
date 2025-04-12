import React from 'react';
import { useSelector } from 'react-redux';

import dataBooking from '../data/book.json'
import classes from './Line.module.sass'
import Container from './Container';

const Line = ({text,page,setPage}) => {
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__top}>
                        <button onClick={(()=>setPage(page-1))} className={page!==0?classes.Main__inner__top__btn:classes.Main__inner__top__off}>{page===1?dataBooking.toRooms[lang]:dataBooking.toServices[lang]}</button>
                        <p>{text[page]}</p>
                    </div>
                    <div className={classes.Main__inner__bottom}>
                        <div className={page===0?classes.Main__inner__bottom__line33:page===1?classes.Main__inner__bottom__line66:classes.Main__inner__bottom__line100}/>
                    </div>
                </div>
            }/>
        </div>
    );
};

export default Line;