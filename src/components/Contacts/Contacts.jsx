import React from 'react';
import { Contact, Name, Tel, Button } from './Contacts.styled';
import PropTypes from 'prop-types';
import { getContacts, addContact, deleteContact } from 'redux/phoneSlice';
import { useSelector, useDispatch } from 'react-redux';

// const filtredContacts = () => {
//   //   const normalizeFiltr = filter.toLowerCase();

//   //   return contacts.filter(contact =>
//   //     contact.name.toLowerCase().includes(normalizeFiltr)
//   //   );
//   // };

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, number }) => {
        return (
          <Contact key={number}>
            <Name>{name}</Name> <Tel>{number}</Tel>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(number))}
            >
              x
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onRemoveContact: PropTypes.func,
};
