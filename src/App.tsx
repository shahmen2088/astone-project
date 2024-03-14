import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import { useAppDispatch, useAppSelector } from './hook/hook';
import { fetchBooks } from './redux/bookSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks('java'));
  }, [dispatch]);
  return (
    <>
      <Header />
      <Main />
      <footer></footer>
    </>
  );
}

export default App;
