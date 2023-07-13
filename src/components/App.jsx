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
    const name = form.elements.name.value;
    
    const contact = {id: nanoid(), name: name}
    console.log(contact);
    // this.state.contacts.push(contact)

    this.setState(state => ({ contacts: state.contacts.push(contact) }))
    
    
    form.reset();
  };

  render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
