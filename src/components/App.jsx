import React, { Component } from "react";
import { nanoid } from 'nanoid'


import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: ''
  }
  
  
  // Додавання контактів із забороною на додавання з однаковими іменами
  handleSubmit = evt => {
    
    evt.preventDefault();
    
    const form = evt.currentTarget;
    const { name, number } = form.elements;
    
    
    // Перевіряємо чи є співпадіння імені серед доданих контактів і імені, що користувач хоче додати
    const gotMatch = this.state.contacts.find(contact => {
      return contact.name === name.value
    });

    
    if (!gotMatch) {
      
      // Зберігаємо дані з інпутів у стан компонента
      this.setState({ name: name.value, number: number.value })
      
      // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
    this.setState(({contacts, name, number}) => ({
      contacts: contacts.concat({
        id: nanoid(), name, number
      }),
    }));
      form.reset();
    }

    else {
      alert(`${name.value} already in list`);
    }
  };

  // Фільтрація контактів
  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  }
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
  
  // Видалення контактів
  deleteContact = id => {
    
      this.setState(state => ({
        contacts: state.contacts.filter(contact => {
          return contact.id !== id;
      })
    }));
  }
  
  render() {
    
    const { handleSubmit, handleChange, contactFiltering, deleteContact } = this;

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
        <ContactList
          contacts={contactFiltering()}
          deleteContactFunc = {deleteContact}
        />
    </div>
  );
  }
};
