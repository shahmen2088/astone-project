import { Link } from 'react-router-dom';
import { booksApi } from '../../redux/booksApi';
import st from './SearchList.module.css';

type SearchListProp = {
  bookQuery: string;
};

export const SearchList = ({ bookQuery }: SearchListProp) => {
  const { data: books, isError } = booksApi.useGetBooksQuery({
    bookQuery: bookQuery,
    limit: 8,
  });

  return (
    <ul className={st.search__list}>
      {books &&
        !isError &&
        books.map((book) => (
          <li key={book.id}>
            <Link className={st.search__link} to={`/${book.id}`}>
              {book.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
