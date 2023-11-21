import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { addContact } from "redux/contactsOperations";
import { useDispatch, useSelector } from "react-redux";
import css from "../RegisterForm/RegisterForm.module.css";

export default function ContactForm({ onSubmit }) {
  const [name] = useState('');
  const [number] = useState('');
  const value = { name, number };

  const dispatch = useDispatch();

  const {items} = useSelector(state => state.contacts);
  const handleLocalSubmit = ({ name, number }, { resetForm }) => {
  const newState = {
    name,
    number,
    };
    
    if (items.find(({ name }) => name === newState.name)) {
      return alert(`${newState.name} is already in contacts.`);
    }
    // onSubmit(newState);
    dispatch(addContact(newState));
    resetForm();
  }

  return (
    <Formik initialValues={value} onSubmit={handleLocalSubmit}>
      <Form className={css.form}>
      <label className={css.label}>
        Name:
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number:
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

        <button className={css.btn} type="submit">Add contact</button>
        </Form>
    </Formik>
  );
}