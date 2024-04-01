import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../shared/hook/hook';
import { loginUser } from '../../shared/reducers/slices/userSlice';
import { checkIsAuth } from '../../utils/checkAuthUtils';
import st from '../UserSignUpForm/UserSignUpForm.module.css';

export default function UserLoginForm() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (checkIsAuth(email, password)) {
      dispatch(
        loginUser({
          email,
          password,
          cards: [],
          history: [],
        }),
      );
      navigate('/', { replace: true });
    } else {
      navigate('/login');
    }
  };
  return (
    <div className={st.form_wrapper}>
      <div className={st.title}>Вход</div>
      <form className={st.form} onSubmit={handleSubmit}>
        <div className={st.form_item}>
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={st.form_item}>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Your password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={st.button_panel}>
          <input type="submit" className={st.button} value={'Войти'}></input>
        </div>
        <div className={st.form_footer}>
          <Link to={'/signUp'} className={st.link}>
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
}
