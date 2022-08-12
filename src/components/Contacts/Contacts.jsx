import React from 'react';
import { Contact, Name, Tel, Button } from './Contacts.styled';
import PropTypes from 'prop-types';
import { deleteContact , useFiltredContscts} from 'redux/phoneSlice';
import {  useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useFiltredContscts();

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Contact key={id}>
            <Name>{name}</Name> <Tel>{number}</Tel>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
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
