import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
    return (
        <div className={css.nav_container}>
            <NavLink className={css.nav_link} to="/">
                Home
            </NavLink>
            
            <ul className={css.nav_list}>
                <li>
                    <NavLink className={css.nav_link} to="/signup">
                        Sign Up
                    </NavLink>
                </li>
                <li>
                    <NavLink className={css.nav_link} to="/login">
                        Login
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AuthNav;