import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = { 
    contacts : [],
    screen: 'list' //list, create
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

  openCreateContact = () => {
    this.setState({screen: 'create'});
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && 
          <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} onOpenCreateContact={this.openCreateContact}/>
        } 
        {this.state.screen === 'create' && 
          <CreateContact />
        }
      </div>      
    )
  }
}

export default App;
