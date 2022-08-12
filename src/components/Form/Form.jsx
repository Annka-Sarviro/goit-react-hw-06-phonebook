import React from 'react';
import { addContact, getContacts } from 'redux/phoneSlice';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Label, Button, ErrorText } from './Form.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={() => <ErrorText>Enter number</ErrorText>}
    />
  );
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormSubmit = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts`);
    }

    values['id'] = numberInputId;
    dispatch(addContact(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label htmlFor={nameInputId}>
          Name
          <Field
            type="text"
            name="name"
            id={nameInputId}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Field
            type="tel"
            name="number"
            id={numberInputId}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />
        </Label>
        <Button type="submit">+ Add contact</Button>
      </Form>
    </Formik>
  );
};

export default FormSubmit;

FormSubmit.propTypes = {
  onSubmitForm: PropTypes.func,
};
