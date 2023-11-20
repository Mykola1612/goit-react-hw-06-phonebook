import React from 'react';
import styles from './ContactList.module.css';
import { deleteContacts } from 'redux/contacts/contacts.reducer';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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
    <ul className={styles.list_contacts}>
      {handleFilterContacts().map(contact => {
        return (
          <li key={contact.id} className={styles.list_element}>
            {contact.name}: {contact.number}{' '}
            <button
              type="button"
              className={styles.button_contacts__list}
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
