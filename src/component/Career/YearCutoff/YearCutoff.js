import React from 'react';
import classes from './YearCutoff.module.css';

const YearCutoff = (props) => {
    return (
            <div className={classes.year}>{props.year}</div>
    );
}

export default YearCutoff;

