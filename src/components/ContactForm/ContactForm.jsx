import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';

import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      dispatch(addContact(contact));
    }

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name </Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        onChange={handleChange}
        value={name}
      />
      <Label>Number </Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="111-11-11"
        onChange={handleChange}
        value={number}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
