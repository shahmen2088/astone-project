import React from 'react';
import { useAppSelector } from '../../hook/hook';
import { Card } from '../Card/Card';

export const CardList: React.FC = () => {
  const cards = useAppSelector((state) => state.books.entities);

  return (
    <ul>
      {cards.map((card) => (
        <Card key={card.id} book={card} /> // Проблема с типами, пока не понимаю как работать
      ))}
    </ul>
  );
};
