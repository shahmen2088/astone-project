import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Book } from '../../shared/api/booksApi';

import st from './Card.module.css';

export const Card = ({ id, authors, title, image }: Book) => {
  return (
    <li className={st.card}>
      <Link to={`/${id}`}>
        <img
          className={st.card__img}
          src={image || ''}
          alt={`Cover for ${title}`}
        />
      </Link>
      <Link to={`/${id}`}>
        <h3 className={st.card__title}>{title}</h3>
      </Link>
      <p className={st.card__author}>{authors}</p>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string,
  image: PropTypes.string,
};
