import React from 'react';
import st from './Button.module.css';

type ButtonType = {
  buttonName: string;
};
export const Button = ({ buttonName }: ButtonType) => {
  return (
    <a className={st.button} href="#">
      <span className={st.button__span}></span>
      {buttonName}
    </a>
  );
};
