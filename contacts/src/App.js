import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

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

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
      </div>      
    )
  }
}

export default App;
