import React from 'react';
import classes from "./Container.module.sass"

const Container = ({inner=""}) => {
    return (
        <div className={classes.Container}>
            {inner}
        </div>
    );
};

export default Container;