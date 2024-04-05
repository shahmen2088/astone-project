import { redirect } from 'react-router-dom';
import { Card } from '../../entities/Card/Card';
import { CardList } from '../../entities/CardList/CardList';
import { useEmailSelector, useFavoritesSelector } from '../../shared/hook/hook';
import st from './FavouritePage.module.css';

export default function FavouritesPage() {
  const cards = useFavoritesSelector();
  const email = useEmailSelector();

  return email ? (
    <div className={st.container}>
      <h3 className={st.title}>Список избранных книг:</h3>
      {cards.length ? (
        <CardList>
          {cards.map((book) => (
            <Card
              id={book.id}
              authors={book.authors}
              title={book.title}
              image={book.image}
              key={book.id}
            />
          ))}
        </CardList>
      ) : (
        <div>
          <p>Список пока пуст!</p>
        </div>
      )}
    </div>
  ) : (
    <>{redirect('/login')}</>
  );
}
