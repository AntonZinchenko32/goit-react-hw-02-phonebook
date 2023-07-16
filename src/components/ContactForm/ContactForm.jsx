import React, { Component } from "react";
import css from './ContactForm.module.css'



export default class Form extends Component {
    
    render() {
        
        const { form, inputStyled, submitButton } = css;

    
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
            />
            <span>Number</span>
            <input
                className={inputStyled}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={submitButton} type="submit">Add contact</button>
        </form>
    )
    }
}




