import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { booksApi } from '../../shared/api/booksApi';
import st from './SearchList.module.css';

type Props = {
  bookQuery: string;
};

export const SearchList = ({ bookQuery }: Props) => {
  const { data: books } = booksApi.useGetBooksQuery({
    bookQuery: bookQuery,
    limit: 5,
  });

  let bookList;
  if (books) {
    bookList = books.map((book) => (
      <li key={book.id}>
        <Link className={st.search__link} to={`/${book.id}`}>
          {book.title}
        </Link>
      </li>
    ));
  }

  return <ul className={st.search__list}>{bookList}</ul>;
};

SearchList.propTypes = {
  bookQuery: PropTypes.string,
};
