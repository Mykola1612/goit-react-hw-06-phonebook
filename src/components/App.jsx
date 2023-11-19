import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addContacts, deleteContacts } from 'redux/contacts/contacts.reducer';
import { setFilter } from 'redux/filter/filter.reducer';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = data => {
    const contactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === data.name.toLowerCase() ||
        contact.number === data.number
    );

    if (contactExists) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(addContacts(data));
  };

  const handleinputChangeFilter = data => {
    dispatch(setFilter(data));
  };

  const handleOnDelete = id => {
    dispatch(deleteContacts(id));
  };

  const handleFilterContacts = () => {
    if (!contacts) {
      return [];
    }

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter filter={handleinputChangeFilter} filterValue={filter} />
      <ContactList
        contacts={handleFilterContacts}
        handleOnDelete={handleOnDelete}
      />
    </div>
  );
};
