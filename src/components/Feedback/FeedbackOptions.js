import React from "react";
import PropTypes from 'prop-types';
import "./FeedbackOptions.css"
const FeedbackOptions = ({ options, answer, name }) => (  
   
    <ul className="ButtonPlace">
        {options.map(option => (
            <button
                key={option}
                type="button"
                className="ButtonOption"
                onClick={() => answer(option)}
            >{name[option]}</button>
        ))}
    </ul>
);

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    answer: PropTypes.func.isRequired,
    name: PropTypes.object.isRequired,
}