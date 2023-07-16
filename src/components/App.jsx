import React, { Component } from "react";
import { nanoid } from 'nanoid'


import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'


export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }
  
  // Функція-обробник сабміту
  handleSubmit = evt => {
    
    evt.preventDefault();
    
    const form = evt.currentTarget;
    
    // Зберігаємо дані з інпутів у стан компонента
    const { name, number } = form.elements;
    this.setState({ name: name.value, number: number.value })
    
    
    // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
    this.setState(({contacts, name, number}) => ({
      contacts: contacts.concat({
        id: nanoid(), name, number
      }),
    }));
    
    form.reset();
  };

  // Функція що передає дані з інпуту до стану компонента
  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  }

  // Функція фільтрації контактів
  contactFiltering = () => {

    const { filter, contacts } = this.state;

    if (filter === '') return contacts;
    
    else {

      const filtredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      if (filtredContacts !== []) {
        return filtredContacts;
      }
      else {
        return contacts;
      }
    }
  }
    
  
  render() {

    const { handleSubmit, handleChange, contactFiltering } = this;

    return (
    <div
        style={{
        margin: '15px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <h1
          style={{
            margin: '15px 0',
            fontSize: '42px'
        }}
        >Phonebook</h1>
        <ContactForm addContactFunc={handleSubmit} />
    
        <h1
        style={{
          margin: '15px 0',
          fontSize: '42px'
        }}
        >Contacts</h1>

        <Filter searchContactFunc= {handleChange} />
        <ContactList contacts={contactFiltering()}  />
    </div>
  );
  }
};
