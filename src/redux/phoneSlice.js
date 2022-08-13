import { createSlice } from '@reduxjs/toolkit';
import { useSelector} from 'react-redux';
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
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },

    filterName(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contact',
  storage,
  whitelist: ['items'],

};

export const contactsReducer = persistReducer(
  persistConfig,
  phoneSlice.reducer
);

export const { addContact, deleteContact, filterName } = phoneSlice.actions;
export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

export const useFiltredContscts = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts)
  const normalizeFiltr = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFiltr)
  );
}
