import { Link, useNavigate } from 'react-router-dom';
import { Search } from '../../features/Search/Search';
import { useAppDispatch } from '../../shared/hook/hook';
import { removeUser } from '../../shared/reducers/slices/userSlice';
import { checkUserRegisterLS } from '../../utils/localStorageUtils';
import sl from './Header.module.css';

export const Header = () => {
  const isAuthenticated = checkUserRegisterLS();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return (
    <header>
      <div className={sl.container}>
        <div className={sl.logo}>
          <Link className="header__logo" to={'/'}>
            Книжная лавка
          </Link>
        </div>
        <Search />
        <nav>
          {isAuthenticated ? (
            <>
              {' '}
              <Link to={'/favourites'}>Избранное</Link>
              <Link to={'/history'}>История</Link>
              <button onClick={handleClick}>Выход</button>
            </>
          ) : (
            <>
              <Link to={'/login'}>Вход</Link>
              <Link to={'/signUp'}>Регистрация</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
