import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Book } from '../../shared/api/booksApi';

import {
  useAppDispatch,
  useEmailSelector,
  useFavoritesSelector,
} from '../../shared/hook/hook';
import {
  addItemToCard,
  deleteFromCard,
} from '../../shared/reducers/slices/userSlice';
import st from './Card.module.css';

export const Card = ({ id, authors, title, image }: Book) => {
  const cards = useFavoritesSelector();
  const email = useEmailSelector();
  const isFavorites = cards.some((item) => item.id === id);

  const dispatch = useAppDispatch();

  const addToCard = () => {
    dispatch(addItemToCard({ id, authors, title, image }));
  };

  const removeFromCard = () => {
    dispatch(deleteFromCard(id));
  };

  const activeButton = isFavorites ? (
    <button onClick={removeFromCard}>Удалить из избранного</button>
  ) : (
    <button onClick={addToCard}>Добавить в избранное</button>
  );

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
      {email && activeButton}
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string,
  image: PropTypes.string,
};
