import { redirect } from 'react-router-dom';
import { Card } from '../../entities/Card/Card';
import { CardList } from '../../entities/CardList/CardList';
import { useEmailSelector, useFavoritesSelector } from '../../shared/hook/hook';

export default function FavouritesPage() {
  const cards = useFavoritesSelector();
  const email = useEmailSelector();

  return email ? (
    <div>
      {cards && (
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
      )}
    </div>
  ) : (
    <>{redirect('/login')}</>
  );
}
