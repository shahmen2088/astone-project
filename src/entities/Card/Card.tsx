import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/UI/Button/Button';
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

  const isFavorites = cards && cards.some((item) => item.id === id);

  const dispatch = useAppDispatch();

  const addToCard = () => {
    dispatch(addItemToCard({ id, authors, title, image }));
  };

  const removeFromCard = () => {
    dispatch(deleteFromCard(id));
  };

  const activeButton = isFavorites ? (
    <Button onTouch={removeFromCard} value={'Удалить из избранного'} />
  ) : (
    <Button onTouch={addToCard} value={'Добавить в избранное'} />
  );

  return (
    <li className={st.card}>
      <Link className={st.card__img} to={`/${id}`}>
        <img src={image || ''} alt={`Cover for ${title}`} />
      </Link>
      {authors && <p className={st.card__author}>{authors}</p>}
      <Link className={st.card__title} to={`/${id}`}>
        <h3>{title}</h3>
      </Link>
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
