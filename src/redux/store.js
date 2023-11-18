import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';

const rootReducer = combineReducers({
  contactsStore: contactsReducer,
  filterStore: filterReducer,
});

export const store = createStore(rootReducer);
