import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { booksApi } from '../../shared/api/booksApi';
import st from './SearchList.module.css';

type Props = {
  bookQuery: string;
};

export const SearchList = ({ bookQuery }: Props) => {
  const { data: books, isLoading } = booksApi.useGetBooksQuery({
    bookQuery: bookQuery,
    limit: 10,
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
  } else {
    bookList = (
      <p className={st.message}>По вашему запросу ничего не найдено!</p>
    );
  }

  return (
    <ul className={st.search__list}>
      {isLoading ? <div className={st.message}>Идет загрузка</div> : bookList}
    </ul>
  );
};

SearchList.propTypes = {
  bookQuery: PropTypes.string,
};
