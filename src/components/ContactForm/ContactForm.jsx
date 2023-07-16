import { nanoid } from "nanoid";
import React, { Component } from "react";
import css from './ContactForm.module.css'



export default class ContactForm extends Component {


    nameInputId = nanoid();
    numberInputId = nanoid();
    
    render() {
        
        const { form, inputStyled, submitButton } = css;
        const { props, nameInputId, numberInputId } = this;

    
    return (
        <form
            className={form}
            onSubmit={props.addContactFunc}
        >
            <label htmlFor={nameInputId}>Name</label>
            <input
                id={nameInputId}
                className={inputStyled}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor={numberInputId}>Number</label>
            <input
                id={numberInputId}
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




