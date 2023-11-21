import { useDispatch } from "react-redux";
// import { useForm } from 'react-hook-form';
import { signup } from "redux/authOperations";
import  css  from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const { name, email, password } = e.target;
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    }
    e.preventDefault();
    dispatch(signup(newUser));
  };
    
  return (
    <>
      <h2 className={css.signup}>Sign Up</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Register</button>
      </form>
    </>
  );
};
export default RegisterForm;