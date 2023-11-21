import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "redux/authOperations";
import { selectUser } from "redux/authSelectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser);

    return (
        <div className={css.user_header}>
            <NavLink className={css.user_link} to="/contacts">
                Contacts
            </NavLink>
            <div className={css.user_container}>
                <p>{name}</p>
                <button className={css.user_btn} onClick={() => dispatch(logOut())}>Log Out</button>
            </div>
        </div>
    )
}

export default UserMenu;