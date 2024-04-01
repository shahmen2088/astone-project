import { Link, useNavigate } from 'react-router-dom';
import { Search } from '../../features/Search/Search';
import { useAppDispatch, useAppSelector } from '../../shared/hook/hook';
import { removeUser } from '../../shared/reducers/slices/userSlice';
import sl from './Header.module.css';

export const Header = () => {
  const { email } = useAppSelector((state) => state.user);
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
          {email ? (
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
