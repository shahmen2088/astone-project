import React, { useState } from 'react';
import { SearchList } from '../SearchList/SearchList';
import st from './Search.module.css';

export const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const searchBook: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      alert('hello');
    }
  };
  return (
    <form className={st.search}>
      <input
        className={st.search_box}
        type="search"
        id="search-box"
        placeholder="Search..."
        autoComplete="off"
        onChange={handleChange}
        value={search}
        onKeyDown={searchBook}
      />
      <label className={st.search_label} htmlFor="search_box">
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      </label>

      <SearchList bookQuery={search} />
    </form>
  );
};
