import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from '../Form/Form.styled';
import { filterName, getFilterValue } from 'redux/phoneSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue)
  return (
    <Label htmlFor={nanoid()}>
      Find contacts by name
      <Input
        type="text"
        onChange={e => dispatch(filterName(e.currentTarget.value))}
        value = {filterValue}
      />
    </Label>
  );
};

export default Filter;
