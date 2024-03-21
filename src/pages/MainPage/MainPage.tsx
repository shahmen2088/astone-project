import { Card } from '../../entities/Card/Card';
import { CardList } from '../../entities/CardList/CardList';
import { Loader } from '../../shared/UI/Loader/Loader';
import { booksApi } from '../../shared/api/booksApi';
// import { useAppDispatch } from '../../shared/hook/hook';
// import { useAuth } from '../../shared/hook/useAuth';

import sl from './MainPage.module.css';

export const MainPage = () => {
  // const dispatch = useAppDispatch();

  // const { isAuth, email } = useAuth();
  const {
    data: books,
    isLoading,
    isError,
  } = booksApi.useGetBooksQuery({ bookQuery: 'Python', limit: 20 });

  if (isError) {
    return <div>Dirt</div>;
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
