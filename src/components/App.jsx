import React, { Component } from "react";
import { nanoid } from 'nanoid'

import Section from './Section/Section'
import Form from './Form/Form'
import Contacts from './Contacts/Contacts'


export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }
  
  // Функція-обробник сабміту
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    
    // Зберігаємо дані з інпутів у стан компонента
    const { name, number } = form.elements;
    this.setState({ name: name.value })
    this.setState({ number: number.value} )
    
    // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
    this.setState(state => ({
    contacts: state.contacts.concat({ id:nanoid(), name: state.name, number: state.number }),
    }));

    
    form.reset();
  };

  // Функція що передає дані з інпуту до стану компонента
  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  }

  // Функція фільтрації контактів
  contactFiltering = () => {

    const filter = this.state.filter;
    const basicContacts = this.state.contacts;
    let filtredContacts;

    if (filter === '') {
      return basicContacts;
    }
    else {
      filtredContacts = basicContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      if (filtredContacts !== []) {
        return filtredContacts;
      }
      else {
        return basicContacts;
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
        <>
          <Section title="Phonebook" />
          <Form addContactFunc={handleSubmit} />
        </>
        <Section title="Contacts" />
        <Contacts
              contacts={contactFiltering()}
              searchContactFunc= {handleChange}
            />
    </div>
  );
  }
};
