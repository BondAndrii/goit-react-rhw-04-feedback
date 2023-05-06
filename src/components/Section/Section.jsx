import React from "react";
import PropTypes from 'prop-types'
import style from "./Section.module.css"
export  function Section({ title, trailer, children }) {
    return <section className={style.Section}>
        <h2 className={style.Tittle}>{title}</h2>
        <p className={style.Trailer }>{trailer}</p>
        {children}
        </section>
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};


Section.propTypes = {
    title: PropTypes.string,
    trailer: PropTypes.string,
    children: PropTypes.node,
}