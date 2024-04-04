import React, { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useEmailSelector } from '../../shared/hook/hook';
import useDebounce from '../../shared/hook/useDebounce';
import { addItemToHistory } from '../../shared/reducers/slices/userSlice';
import { SearchList } from '../SearchList/SearchList';
import st from './Search.module.css';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();
  const debouncedSearchTerm = useDebounce(searchText, 500);
  const navigate = useNavigate();
  const email = useEmailSelector();
  const bookQuery = searchParams.get('q') ?? '';

  useEffect(() => {
    setSearchText(bookQuery);
  }, [bookQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setIsDropdownOpen(true);
  };
  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 500);
  };

  const searchBooks: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const formatText = searchText.trim();
      navigate(formatText ? `/search?q=${formatText}` : '/');

      const currentTime = new Date();

      if (email) {
        dispatch(
          addItemToHistory({
            text: formatText,
            link: `/search?q=${formatText}`,
            time: currentTime.toLocaleTimeString(),
          }),
        );
      }
      setIsDropdownOpen(false);
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
        value={searchText}
        onKeyDown={searchBooks}
        onBlur={handleBlur}
        onFocus={() => setIsDropdownOpen(true)}
      />
      <label className={st.search_label} htmlFor="search-box"></label>

      {isDropdownOpen && debouncedSearchTerm && (
        <SearchList bookQuery={debouncedSearchTerm} />
      )}
    </form>
  );
};
