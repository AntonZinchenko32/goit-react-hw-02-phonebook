import React, { Component } from "react";
import css from './Contacts.module.css'
import PropTypes from "prop-types"



const Contacts = ({contacts, searchContactFunc}) => {
    
    return (
        <>  
            <span className={css.label}>Find contacts by name</span>
            <input
                className={css.input}
                onChange={searchContactFunc}
            />
            <ul className={css.contactsList}>
                {contacts.map(({ name, id, number }) => (
                    <li key={id}>{name}: {number}</li>
                ))}
            </ul>
        </>
    )
}

export default Contacts;

