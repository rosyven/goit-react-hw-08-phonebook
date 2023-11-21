import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact } from 'redux/contactsOperations';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
export default ContactItem;