import { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  setName = evn => this.setState({ name: evn.target.value });
  setNumber = evn => this.setState({ number: evn.target.value });

  onSubmitHandler = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    this.props.addNewContact({
      id: nanoid(),
      name: name,
      number: number,
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.formWrapper}>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="name-input">Name:</label>

          <input
            type="text"
            name="name"
            id="name-input"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain, only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={evn => this.setName(evn)}
            value={name}
          />

          <label htmlFor="tel-input">Number:</label>

          <input
            type="tel"
            name="number"
            id="tel-input"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={evn => this.setNumber(evn)}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}