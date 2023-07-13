import React, { Component } from "react";
import { nanoid } from 'nanoid'

import Section from './Section/Section'
import Form from './Form/Form'
import Contacts from './Contacts/Contacts'

export class App extends Component {

  state = {
  contacts: [],
  name: ''
  }
  
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    
    // Зберігаємо дані з інпуту у стан компонента
    this.setState({name: form.elements.name.value})
    
    // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
    this.setState(state => ({
    contacts: state.contacts.concat({id:nanoid(), name: state.name}),
  }));

  
    form.reset();
  };

  render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
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
