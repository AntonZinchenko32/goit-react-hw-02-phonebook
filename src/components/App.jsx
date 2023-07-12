import React, { Component } from "react";

import Section from './Section/Section'
import Form from './Form/Form'

export class App extends Component {

  state = {
  contacts: [],
  name: ''
}

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
        <Section title="Phonebook" />
        <Form />
        <Section title="Contacts" />
    </div>
  );
  }
};
