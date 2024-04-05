import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../../shared/UI/Loader/Loader';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));
const BookPage = lazy(() => import('../../pages/BookPage/BookPage'));
const SearchPage = lazy(() => import('../../pages/SearchPage/SearchPage'));
const HistoryPage = lazy(() => import('../../pages/HistoryPage/HistoryPage'));
const FavouritesPage = lazy(
  () => import('../../pages/FavouritesPage/FavouritesPage'),
);
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));

export const AppRouter = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:bookId" element={<BookPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
