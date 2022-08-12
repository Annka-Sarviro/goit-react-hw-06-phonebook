import React from 'react';
import { useSelector } from 'react-redux';
import Section from './Section';
import FormSubmit from './Form/';
import Contacts from './Contacts';
import Filter from './Filter';
import { Container } from './App.styled';
import { getContacts } from '../redux/phoneSlice';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <FormSubmit />
      </Section>

      {contacts.length > 0 ? (
        <Section title="Contact">
          <Filter />
          <Contacts />
        </Section>
      ) : (
        <div>You don't have any contacts yet</div>
      )}
    </Container>
  );
}

export default App;
