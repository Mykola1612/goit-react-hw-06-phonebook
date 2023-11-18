const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
};


export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addProduct':
      { return { ...state, contacts: [...state.contacts, action.payload] }; }
     
    case 'contacts/deleteProduct':
      {
        return {
        ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)
        }
      }

    default:
      break;
  }
  return state;
};
