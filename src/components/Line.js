import React from 'react';
import classes from './Line.module.sass'
import Container from './Container';
const Line = ({text,page,setPage}) => {
    return (
        <div className={classes.Main}>
            <Container inner={
                <div className={classes.Main__inner}>
                    <div className={classes.Main__inner__top}>
                        <button onClick={(()=>setPage(page-1))} className={page!==0?classes.Main__inner__top__btn:classes.Main__inner__top__off}>{page===1?"к номерам":"к услугам"}</button>
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