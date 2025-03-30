import React from 'react';
import classes from './Contacts.module.sass';
import Container from './Container';
import MapLocalComponent from './MapLocalComponent';

const Contacts = ({adesses,markers,zoom=12}) => {
    return (
        <div className={classes.Contacts}>
            <Container inner={
                <div className={classes.Contacts__inner}>
                    <div className={classes.Contacts__inner__left}>
                        <MapLocalComponent markers={markers} zoom={zoom}/>
                    </div>
                    <div className={classes.Contacts__inner__right}>
                        <p className={classes.Contacts__inner__right__label}>Контакты</p>
                        {adesses.map((item,idx)=>(
                            <p key={idx} className={classes.Contacts__inner__right__text}>· {item}</p>
                        ))}
                        <div className={classes.Contacts__inner__right__br}/>
                        <div className={classes.Contacts__inner__right__btn}>
                            <p>написать нам</p>
                        </div>
                    </div>
                </div>
            }/>
        </div>
    );
};

export default Contacts;