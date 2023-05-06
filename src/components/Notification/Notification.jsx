import React from "react";
import PropTypes from 'prop-types'

export function Notification({ massage }) {
    return <p className="Trailer">
        {massage}
    </p>
};

// Notification.


Notification.propTypes = {
    massage: PropTypes.string.isRequired,
}