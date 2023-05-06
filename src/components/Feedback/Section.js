import React from "react";
import PropTypes from 'prop-types'
import "./Section.css"
function Section({ title, trailer, children }) {
    return <section className="Section">
        <h2 className="Tittle">{title}</h2>
        <p className="Trailer">{trailer}</p>
        {children}
        </section>
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
export default Section;

Section.propTypes = {
    title: PropTypes.string,
    trailer: PropTypes.string,
    children: PropTypes.node,
}