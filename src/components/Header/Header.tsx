import React, { useState } from 'react';
import './Header.css';

export const Header = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchBook = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      alert('hello');
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo">Your logo</div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            onKeyDown={searchBook}
          />
          <button>Search</button>
        </div>
        <div className="actions">
          <button>Избранное</button>
          <a href="#">Вход</a>
          <a href="#">Регистрация</a>
        </div>
      </div>
    </header>
  );
};
