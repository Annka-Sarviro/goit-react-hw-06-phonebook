import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from '../Form/Form.styled';
import PropTypes from 'prop-types';
import { filterName } from 'redux/phoneSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label htmlFor={nanoid()}>
      Find contacts by name
      <Input
        type="text"
        onChange={e => dispatch(filterName(e.currentTarget.value))}
      />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
