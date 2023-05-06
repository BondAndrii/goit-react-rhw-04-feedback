import React from "react";
import PropTypes from 'prop-types';
import style from "./FeedbackOptions.module.css"
export const FeedbackOptions = ({ options, answer, name }) => (  
   
    <ul className={style.ButtonPlace}>
        {options.map(option => (
            <button
                key={option}
                type="button"
                className={style.ButtonOption}
                onClick={() => answer(option)}
            >{name[option]}</button>
        ))}
    </ul>
);




FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    answer: PropTypes.func.isRequired,
    name: PropTypes.object.isRequired,
}