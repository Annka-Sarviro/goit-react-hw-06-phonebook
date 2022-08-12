import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const phoneSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },

    deleteContact(state, action) {
      state.items.filter(contact => contact.id !== action.payload);
    },

    filterName(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  phoneSlice.reducer
);

export const { addContact, deleteContact, filterName } = phoneSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
