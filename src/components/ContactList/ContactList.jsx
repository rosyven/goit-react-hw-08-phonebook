import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import css from "./ContactList.module.css";

const ContactList = ({ children }) => {
  const { items } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const filteredContacts = () => {
    if (filter === '') return items;

    return items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filterContacts = filteredContacts();

  return (
    <div>
      <ul className={css.list}>
        { children }
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;