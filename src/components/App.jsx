import { Component } from 'react';

import { ContactForm, Filter, ContactList } from 'components';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  setFilter = evn => this.setState({ filter: evn.target.value });

  addNewContact = newContactObj =>
    this.setState({ contacts: [...this.state.contacts, newContactObj] });

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={styles.mainWrapper}>
        <h1> Phonebook: </h1>
        <ContactForm addNewContact={this.addNewContact} />
        <h2> Contacts </h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList contacts={contacts} filter={filter} />
      </div>
    );
  }
}