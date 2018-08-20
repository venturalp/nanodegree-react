import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = { 
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((state)=>({
      contacts: state.contacts.filter((c)=> c.id !== contact.id)
    }));
  }

  addContact = () => {
    console.log('AQUI');
    this.setState((state)=>({
      contacts: [...state.contacts, {
        "id": "ventura" + Math.random(),
        "name": "Guilherme Ventura de Souza",
        "email": "guilherme.souza3@nextel.com.br",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }]
    }));
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
      </div>      
    )
  }
}

export default App;
