import React, { Component } from "react";
import css from './Form.module.css'
import PropTypes from "prop-types"


export default class Form extends Component {
    
    render() {
        
        const { form, inputStyled } = css;

    
    return (
        <form
            className={form}
            onSubmit={this.props.addContactFunc}
        >
            <span>Name</span>
            <input
                className={inputStyled}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
/>          <button type="submit">Add contact</button>
        </form>
    )
    }
}




