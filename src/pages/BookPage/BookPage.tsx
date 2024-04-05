import { useParams } from 'react-router-dom';
import { Card } from '../../entities/Card/Card';
import { Loader } from '../../shared/UI/Loader/Loader';
import { booksApi } from '../../shared/api/booksApi';
import st from './BookPage.module.css';

export default function BookPage() {
  const { bookId } = useParams();
  const { data: book, isLoading } = booksApi.useGetBookInfoQuery(bookId);
  return (
    <main className={st.container}>
      {book && (
        <article className={st.article}>
          <div className={st.article__img}>
            <Card
              id={book.id}
              title={book.title}
              authors={book.authors}
              image={book.image}
            />
          </div>

          <div className={st.article__text}>
            <p className={st.article__descr}>{book.description}</p>
            <p className={st.article__publisher}>
              <span>Издательство:</span> {book.publisher}
            </p>
            <p className={st.article__date}>
              <span>Дата публикации:</span> {book.publishedDate}
            </p>
          </div>
        </article>
      )}
      {isLoading && <Loader />}
    </main>
  );
}
