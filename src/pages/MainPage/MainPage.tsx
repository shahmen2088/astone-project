import { useNavigate } from 'react-router-dom';
import { Card } from '../../entities/Card/Card';
import { CardList } from '../../entities/CardList/CardList';
import { Loader } from '../../shared/UI/Loader/Loader';
import { booksApi } from '../../shared/api/booksApi';
import sl from './MainPage.module.css';

export const MainPage = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = booksApi.useGetBooksQuery({ bookQuery: '', limit: 10 });
  const navigate = useNavigate();

  if (isError) {
    navigate('/error');
  }

  return (
    <main className={sl.container}>
      {books && (
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
};
