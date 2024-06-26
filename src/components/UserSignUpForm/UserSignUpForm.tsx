import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../shared/hook/hook';
import { setUser } from '../../shared/reducers/slices/userSlice';
import { authenticateCredentials } from '../../utils/userVerificationUtils';
import st from './UserSignUpForm.module.css';

export default function UserSignUpForm() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const currentUser = authenticateCredentials(email, password);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (currentUser.email) {
      setErrorMessage(
        'Эта электронная почта уже зарегистрирована. Пожалуйста, попробуйте использовать другое.',
      );
    } else {
      dispatch(
        setUser({
          email,
          password,
          cards: [],
          history: [],
        }),
      );
      navigate('/login');
    }
  };
  return (
    <div className={st.form_wrapper}>
      <div className={st.title}>Регистрация</div>
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
          <input
            type="submit"
            className={st.button}
            value={'Создать аккаунт'}
          ></input>
        </div>
        <div className={st.form_footer}>
          <Link to={'/login'} className={st.link}>
            У меня уже есть аккаунт
          </Link>
          <p className={st.error}>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
}
