import { FiTrash } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import {
  Button,
  Item,
  LineWithShadow,
  List,
  Name,
  Number,
  TextMessage,
  Title,
  TitlesWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { removeContact } from 'redux/contacts/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const noContactsMessage =
    filter && contacts.length === 0
      ? 'No contact with this name'
      : "There are no entries in your phone book yet. It's time to add your first contact";

  const onRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const newList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <LineWithShadow />
      <TitlesWrapper>
        <Title>Name</Title>
        <Title>Number</Title>
      </TitlesWrapper>
      <LineWithShadow />
      {contacts.length > 0 ? (
        <List>
          {newList.map(contact => {
            return (
              <Item key={contact.id}>
                <BsPersonCircle size={21} color="#fff" />
                <Name>{contact.name}</Name>
                <Number>{contact.number}</Number>
                <Button onClick={() => onRemoveContact(contact.id)}>
                  <FiTrash size={21} />
                </Button>
              </Item>
            );
          })}
        </List>
      ) : (
        <TextMessage>{noContactsMessage}</TextMessage>
      )}
    </>
  );
};
