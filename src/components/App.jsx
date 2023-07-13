import React, { Component } from "react";
import { nanoid } from 'nanoid'

import Section from './Section/Section'
import Form from './Form/Form'
import Contacts from './Contacts/Contacts'

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    name: '',
    number: ''
  }
  
  // Функція-обробщик сабміту
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

  render() {
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
          <Form addContactFunc={this.handleSubmit} />
        </>
        {this.state.contacts.length != 0 &&
          <>
          <Section title="Contacts" />
          <Contacts contacts={this.state.contacts} />
          </>
        }
    </div>
  );
  }
};
