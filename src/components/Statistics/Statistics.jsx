import React from "react";
import PropTypes from 'prop-types'

import style from "./Statistics.module.css"

export const Statistics = ({good, neutral, bad, total, positivePercentage, neutralPercentage}) => (
    <div>
        {total > 0 && (<ul>
        <p className={style.Trailer}>{total} людей нам кажуть {good} разів супер, {neutral} разів норм, {bad} разів відстій.</p>
        <p className={style.Trailer}>{positivePercentage > 0 && (<span> Тож високу оцінку нам дали {positivePercentage} % опитаних.</span>)} {neutralPercentage > 0 && (<span> Залишились задоволеними {neutralPercentage} % опитаних.</span>)}</p>

    </ul>)}
    <ul>
                <p className={style.Trailer}>{good} разів супер</p>
                <p className={style.Trailer}>{neutral} разів норм</p>
                <p className={style.Trailer}>{bad} разів відстій</p>
                
                {total > 0 && (
                <p className={style.Trailer}>{total} разів дали відгук</p>
                )}
                {total > 0 && (
                <p className={style.Trailer}>позитивне враження { positivePercentage} %</p>
                )}
        </ul>
        </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    neutralPercentage: PropTypes.number.isRequired,
}

 