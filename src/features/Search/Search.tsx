import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../../shared/hook/useDebounce';
import { SearchList } from '../SearchList/SearchList';
import st from './Search.module.css';

type Inputs = {
  search: string;
};

export const Search = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchTerm = useDebounce(searchText, 500);
  const { register } = useForm<Inputs>();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const searchBooks: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const formatText = searchText.trim();
      navigate(formatText ? `/search?q=${formatText}` : '/');
      setSearchText('');
    }
  };

  return (
    <form className={st.search}>
      <input
        {...register('search')}
        className={st.search_box}
        type="search"
        id="search-box"
        placeholder="Search..."
        autoComplete="off"
        onChange={handleChange}
        value={searchText}
        onKeyDown={searchBooks}
      />
      <label className={st.search_label} htmlFor="search-box"></label>

      <SearchList bookQuery={debouncedSearchTerm} />
    </form>
  );
};
