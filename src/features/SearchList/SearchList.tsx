import { Link } from 'react-router-dom';
import { booksApi } from '../../shared/api/booksApi';
import st from './SearchList.module.css';

type Props = {
  bookQuery: string;
};

export const SearchList = ({ bookQuery }: Props) => {
  const { data: books, isError } = booksApi.useGetBooksQuery({
    bookQuery: bookQuery,
    limit: 10,
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
