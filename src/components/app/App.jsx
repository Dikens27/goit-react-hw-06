import css from './App.module.css';
import { useState, useEffect } from 'react';
import ContactForm from '../contactForm/ContactForm';
import SearchBox from '../searchBox/SearchBox';
import ContactList from '../contactList/ContactList';
import initialContacts from '../../contacts.json';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('saved-contacts');
  if (savedContacts) {
    return JSON.parse(savedContacts);
  } else {
    return initialContacts;
  }
};

export default function App() {
  const [contacts] = useState(getInitialContacts);

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
