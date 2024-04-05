import { useSearchParams } from 'react-router-dom';
import { Card } from '../../entities/Card/Card';
import { CardList } from '../../entities/CardList/CardList';
import { Loader } from '../../shared/UI/Loader/Loader';
import { useGetBooksQuery } from '../../shared/api/booksApi';
import sl from '../MainPage/MainPage.module.css';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const bookQuery = searchParams.get('q') ?? '';
  const { data: books, isLoading } = useGetBooksQuery({
    bookQuery: bookQuery,
    limit: 20,
  });

  let bookList;
  if (books) {
    bookList = (
      <CardList>
        {books.map((book) => (
          <Card
            id={book.id}
            authors={book.authors}
            title={book.title}
            image={book.image}
            key={book.id}
          />
        ))}
      </CardList>
    );
  } else {
    bookList = <div>No results</div>;
  }

  return (
    <main className={sl.container}>{isLoading ? <Loader /> : bookList}</main>
  );
}
