import React from 'react';
import { Book } from '../../redux/booksApi';
import st from './Card.module.css';

export const Card = ({ authors, title, image }: Book) => {
  return (
    <li className={st.card}>
      <a href="">
        <img
          className={st.card__img}
          src={image || ''}
          alt={`Cover for ${title}`}
        />
      </a>
      <h3 className={st.card__title}>{title}</h3>
      <p className={st.card__author}>{authors}</p>
    </li>
  );
};
