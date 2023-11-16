const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
};

export const contactsReducer = (state = initialState, action) => {
  // action -> {type: "contacts/deleteProduct", paylout:}
  switch (action.type) {
    case 'contacts/deleteProduct':
      return { ...state, contacts: [state.products, action.payload] };
      break;

    default:
      break;
  }
  return state;
};
