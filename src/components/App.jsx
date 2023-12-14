import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactEntryForm } from './ContactEntryForm/ContactEntryForm';
import { ContactList } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { GlobalStyle } from './GlobalStyle';

export function App() {
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleSubmit = ({ name, number }) => {
    const existingContact = contacts.find((contact) => contact.name === name);
    if (existingContact) {
      alert('Contact with this name already exists');
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <ContactEntryForm onSubmit={handleSubmit} />
      <SearchFilter value={filter} onChange={handleChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
      <GlobalStyle />
    </>
  );
}
