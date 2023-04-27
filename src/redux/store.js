import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/slice';
import { filterReducer } from './contacts/filter';

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterReducer,
  },
});

export { store };
