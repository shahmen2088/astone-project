import React from 'react';
interface CardProps {
  book: object;
}

export const Card: React.FC<CardProps> = ({ book }) => {
  const { id, title, authors, image, publisher, publishedDate, description } =
    book; //Проблема с типами, пока не понимаю как работать
  return (
    <li className="card">
      <h3>Title: {title}</h3>
      <p>Author(s): {authors}</p>
      <img src={image || ''} alt={`Cover for ${title}`} />
      <div>Publisher: {publisher}</div>
      <div>
        Published Date:{' '}
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(publishedDate))}
      </div>
      <div>{description}</div>
    </li>
  );
};
