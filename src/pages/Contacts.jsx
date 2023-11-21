import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { fetchContacts } from "redux/contactsOperations";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import css from "../components/RegisterForm/RegisterForm.module.css";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchContacts());
        }
    }, [dispatch, isLoggedIn]);

    return (
        <>
            <h1 className={css.signup}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.signup}>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    );
};
export default Contacts;