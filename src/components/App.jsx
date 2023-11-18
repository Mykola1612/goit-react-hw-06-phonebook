import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore.filter)

  // const [filter, setFilter] = useState('');

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

    const addProductAction = {
      type: 'contacts/addProduct', 
      payload: data
    }
    dispatch(addProductAction)
  };

  const handleinputChangeFilter = data => {
    const setFilterAction = {
      type: "set_filter",
      payload: data
}
    dispatch(setFilterAction)
  };

  const handleOnDelete = id => {
    const deleteProductAction = {
      type: 'contacts/deleteProduct',
      payload: id
    }
    dispatch(deleteProductAction)
  };

  const handleFilterContacts = () => {
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
