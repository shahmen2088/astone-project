import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { Loader } from '../../shared/UI/Loader/Loader';
import { useAuth } from '../../shared/hook/useAuth';

const MainPage = lazy(() =>
  import('../../pages/MainPage/MainPage').then((module) => ({
    default: module.MainPage,
  })),
);
const BookPage = lazy(() => import('../../pages/BookPage/BookPage'));
const SearchPage = lazy(() => import('../../pages/SearchPage/SearchPage'));
const SignInPage = lazy(() => import('../../pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
const HistoryPage = lazy(() => import('../../pages/HistoryPage/HistoryPage'));
const FavouritesPage = lazy(
  () => import('../../pages/FavouritesPage/FavouritesPage'),
);
const PrivateRoute = lazy(() => import('./PrivateRoute'));

export const AppRouter = () => {
  const { isAuth, email, token, id } = useAuth();
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:bookId" element={<BookPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
