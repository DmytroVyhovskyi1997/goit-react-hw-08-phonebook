
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { Button, Div, Li, Ul, Text } from './ContactsList.module';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    if (!contacts) {
      return [];
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = findContacts();

  return (
    <Div>
        <Ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Li  key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button
             
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
    </Div>
  
  );
};
