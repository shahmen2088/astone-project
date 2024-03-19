import React from 'react';
import { booksApi } from '../../redux/booksApi';
import { Card } from '../Card/Card';
import { CardList } from '../CardList/CardList';
import { Loader } from '../../UI/Loader/Loader';
import sl from './Main.module.css';

export const Main = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = booksApi.useGetBooksQuery({ bookQuery: 'python', limit: 5 });

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
