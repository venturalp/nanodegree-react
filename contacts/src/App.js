import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';
import { Route } from 'react-router-dom';

class App extends Component {
  state = { 
    contacts : []
  }

  componentDidMount = () =>{
    ContactsAPI.getAll().then((contacts)=>{      
      this.setState({contacts: contacts});
    });
  }

  removeContact = (contact) => {
    ContactsAPI.remove(contact).then((contact)=>{      
      this.setState((state)=>({
        contacts: state.contacts.filter((c)=> c.id !== contact.id)
      }));
    })
  }

  createContact = (contact) => {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: [...state.contacts, contact]
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={()=> (
          <ListContacts 
            contacts={this.state.contacts} 
            onDeleteContact={this.removeContact} 
          />
        )}/>
        <Route path="/create" render={({history}) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact);
              history.push('/');
            }}
          />
        )}/>
      </div>      
    )
  }
}

export default App;
