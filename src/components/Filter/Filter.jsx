import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter';
import { getFilter } from 'redux/contacts/selectors';
import { Input, Label, Form } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Form>
      <Label>Find contacts by Name </Label>
      <Input
        type="text"
        placeholder="Enter filter"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </Form>
  );
};
