import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CardList } from './components/CardList/CardList.tsx';
import { store } from './redux/index.ts';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <CardList />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
