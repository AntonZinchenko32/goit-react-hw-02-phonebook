import React, { Component } from "react";
import css from './Contacts.module.css'
import PropTypes from "prop-types"
import Notification from "components/Notification/Notification";


const Contacts = ({contacts, searchContactFunc}) => {
    
    return (
        <>  
            <span className={css.label}>Find contacts by name</span>
            <input
                className={css.input}
                onChange={searchContactFunc}
            />
            {contacts.length !== 0 ?
                <ul className={css.contactsList}>
                {contacts.map(({ name, id, number }) => (
                    <li key={id}>{name}: {number}</li>
                ))}
                </ul>
                :
                <Notification message="No contacts was find, Sorry" />
            }
            
        </>

    )
}

export default Contacts;

