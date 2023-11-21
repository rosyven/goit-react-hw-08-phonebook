import { useDispatch } from "react-redux";
import { login } from "redux/authOperations";
import  css  from "../RegisterForm/RegisterForm.module.css";
import { useState } from "react";
// import { useForm } from "react-hook-form";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget;
    const userLogin = {
      email: email.value,
      password: password.value,
    }
    //   dispatch(login(userLogin));

    if (!email || !password) {
      setLoginError("Please enter both email and password");
      return;
    }

    dispatch(login(userLogin))
      .then(() => {
        setLoginError(null);
        e.currentTarget.reset();
      })
      .catch(() => {
        setLoginError("Invalid email or password");
      });
  };
    
  return (
    <>
      <h2 className={css.signin}>Log In</h2>
      <form className={css.form} onSubmit={onSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        <button className={css.btn} type="submit">Log In</button>
      </form>
    </>
  );
};
export default LoginForm;