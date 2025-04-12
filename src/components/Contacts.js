import React from 'react';
import { useSelector } from 'react-redux';

import dataContact from "../data/contacts.json"
import classes from './Contacts.module.sass';
import Container from './Container';
import MapLocalComponent from './MapLocalComponent';

const Contacts = ({data,markers,zoom=12}) => {
    const {lang} = useSelector(state => state.HeaderReducer)
    return (
        <div className={classes.Contacts}>
            <Container inner={
                <div className={classes.Contacts__inner}>
                    <div className={classes.Contacts__inner__left}>
                        <MapLocalComponent markers={markers} zoom={zoom}/>
                    </div>
                    <div className={classes.Contacts__inner__right}>
                        <p className={classes.Contacts__inner__right__label}>{dataContact.label[lang]}</p>
                        {data.map((item,idx)=>(
                            <p key={idx} className={classes.Contacts__inner__right__text}>· {item[lang]}</p>
                        ))}
                        <p className={classes.Contacts__inner__right__text}>· {dataContact.email[lang]}</p>
                        <p className={classes.Contacts__inner__right__text}>· {dataContact.phone[lang]}</p>
                        <div className={classes.Contacts__inner__right__br}/>
                        <a href='https://t.me/altushka_na_steroidax' className={classes.Contacts__inner__right__btn}>
                            <p>{dataContact.writeUs[lang]}</p>
                        </a>
                    </div>
                </div>
            }/>
        </div>
    );
};

export default Contacts;