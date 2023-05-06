import React from "react";
import PropTypes from 'prop-types'

import style from "./Notification.module.css"

export function Notification({ massage }) {
    return <p className={style.Trailer}>
        {massage}
    </p>
};

// Notification.


Notification.propTypes = {
    massage: PropTypes.string.isRequired,
}