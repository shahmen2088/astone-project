import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../shared/UI/Loader/Loader';
import { Card } from '../../entities/Card/Card';
import { CardList } from '../../entities/CardList/CardList';
import { useGetBooksQuery } from '../../shared/api/booksApi';
import sl from '../MainPage/MainPage.module.css';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const bookQuery = searchParams.get('q') ?? '';
  const {
    data: books,
    isError,
    isLoading,
  } = useGetBooksQuery({ bookQuery: bookQuery, limit: 20 });

  return (
    <main className={sl.container}>
      {books && !isLoading && !isError && (
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
      )}
      {isLoading && <Loader />}
    </main>
  );
}
