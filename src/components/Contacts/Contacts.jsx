import React, { Component } from "react";
import css from './Contacts.module.css'
import PropTypes from "prop-types"



const Contacts = ({contacts}) => {
    
    return (
        <ul className={css.contactsList}>
            {contacts.map(({ name, id }) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
    )
}

export default Contacts;

