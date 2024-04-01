import { useParams } from 'react-router-dom';
import { Loader } from '../../shared/UI/Loader/Loader';
import { booksApi } from '../../shared/api/booksApi';

export default function BookPage() {
  const { bookId } = useParams();
  const { data: book, isLoading } = booksApi.useGetBookInfoQuery(bookId);
  return (
    <main className="content container">
      {book && (
        <article className="article">
          <div className="article__img">
            <img src={book.image} alt={book.title} />
            <button>Add to cart</button>
          </div>

          <div className="article__text">
            <p className="article__authors">{book.authors}</p>
            <h2 className="article__title">{book.title}</h2>
            <p className="article__descr">{book.description}</p>
            <p className="article__publisher">Издательство: {book.publisher}</p>
            <p className="article__date">
              Дата публикации: {book.publishedDate}
            </p>
          </div>
        </article>
      )}
      {isLoading && <Loader />}
    </main>
  );
}
