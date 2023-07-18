import React, { Component } from "react";
import css from './ContactItem.module.css'
import PropTypes from "prop-types"

export default class ContactItem extends Component {
    
    render() {

        const {contacts, deleteContactFunc} = this.props

        return (
            contacts.map(({ name, id, number }) => (
                <li className={css.contactItem} key={id}>{name}: {number}
                    <button className={css.deleteButton} onClick={() => deleteContactFunc (id)}>Delete</button>
                </li>
            ))
        )
    }
}


ContactItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}

