import React from "react";
import PropTypes from 'prop-types'

function Notification({ massage }) {
    return <p className="Trailer">
        {massage}
    </p>
};

// Notification.
export default Notification;

Notification.propTypes = {
    massage: PropTypes.string.isRequired,
}