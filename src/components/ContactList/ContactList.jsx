import { Component } from 'react';

import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;

    return (
      <>
        <ul>
          {contacts.length > 0 &&
            contacts.map(contact => {
              const { id, name, number } = contact;
              const isFoundByFilter = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
              const isShowContact = filter.length === 0 || isFoundByFilter;

              return isShowContact && <li key={id}>{`${name}  ${number}`}</li>;
            })}
        </ul>
      </>
    );
  }
}
