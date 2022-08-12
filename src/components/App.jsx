import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Section from './Section';
import FormSubmit from './Form/';
import Contacts from './Contacts';
import Filter from './Filter';
import { Container } from './App.styled';
import {
  addContact,
  deleteContact,
  getContacts,
  getFilterValue,
} from '../redux/phoneSlice';

const STORAGE_KEY = 'contact';

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  // // const removeContact = useSelector(getClicksValue);

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  // });
  // const [filter, setFilter] = useState
  // ('');

  // useEffect(() => {
  //   window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <FormSubmit />
      </Section>

      {contacts.length > 0 ? (
        <Section title="Contact">
          <Filter />
          {/* <Contacts /> */}
        </Section>
      ) : (
        <div>You don't have any contacts yet</div>
      )}
    </Container>
  );
}

export default App;
