import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
    return (
        <div>
            {/* <h1>Phonebook</h1> */}

            <div>
                <h2 className={css.welcome}>Welcome</h2>
                <NavLink className={css.home_link} to="/signup">
                    Sign Up
                </NavLink>
                <p>or</p>
                <NavLink className={css.home_link} to="/login">
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Home;