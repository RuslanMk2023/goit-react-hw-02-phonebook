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
    filterValue: '',
  };

  setFilterValue = evn => this.setState({ filterValue: evn.target.value });

  addNewContact = newContactObj =>
    this.setState({ contacts: [...this.state.contacts, newContactObj] });

  deleteContact = id =>
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });

  getContactsForShow = () => {
    const { contacts, filterValue } = this.state;

    if (filterValue === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.trim().toLowerCase())
    );
  };

  render() {
    const { contacts, filterValue } = this.state;

    return (
      <div className={styles.mainWrapper}>
        <h1> Phonebook: </h1>
        <ContactForm addNewContact={this.addNewContact} contacts={contacts} />

        <h2> Contacts </h2>
        <div className={styles.contentWrepper}>
          <Filter
            filterValue={filterValue}
            setFilterValue={this.setFilterValue}
          />
          <ContactList
            deleteContact={this.deleteContact}
            contacts={this.getContactsForShow()}
          />
        </div>
      </div>
    );
  }
}
