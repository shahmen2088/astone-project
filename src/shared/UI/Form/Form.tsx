import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import st from './Form.module.css';

type Props = {
  title: string;
  step: string;
  stepPath: string;
  handleClick: (email: string, pass: string) => void;
};

export const Form = ({ title, step, stepPath, handleClick }: Props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className={st.form_wrapper}>
      <h1 className={st.title}>{title}</h1>
      <form className={st.form}>
        <div className={st.form_item}>
          <label htmlFor="email"></label>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={st.form_item}>
          <label htmlFor="password"></label>
          <input
            value={pass}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </div>
        <div className={st.button_panel}>
          <input
            type="submit"
            className={st.button}
            title={title}
            value={title}
            onClick={() => handleClick(email, pass)}
          ></input>
        </div>
      </form>
      <div className={st.form_footer}>
        <p>
          <Link to={stepPath}>{step}</Link>
        </p>
      </div>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  step: PropTypes.string,
  stepPath: PropTypes.string,
};
