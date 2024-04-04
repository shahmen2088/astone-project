import { Link, useNavigate } from 'react-router-dom';
import { Search } from '../../features/Search/Search';
import { useAppDispatch } from '../../shared/hook/hook';
import { removeUser } from '../../shared/reducers/slices/userSlice';
import { checkingUserAuthorization } from '../../utils/userVerificationUtils';
import st from './Header.module.css';

export const Header = () => {
  const isAuthenticated = checkingUserAuthorization();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return (
    <header>
      <div className={st.container}>
        <div className={st.logo}>
          <Link className="header__logo" to={'/'}>
            Книжная лавка
          </Link>
        </div>
        <Search />
        <nav>
          {isAuthenticated ? (
            <>
              {' '}
              <Link title="Избранные книги" to={'/favourites'}>
                <svg
                  className={st.fav_icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                </svg>
              </Link>
              <Link title="История поиска" to={'/history'}>
                <svg
                  className={st.hist_icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z" />
                </svg>
              </Link>
              <a title="Выход" onClick={handleClick}>
                <img src="" alt="" />
                <svg
                  className={st.log_icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                </svg>
              </a>
            </>
          ) : (
            <div className={st.auth}>
              <Link title="Вход" to={'/login'}>
                <h3>Войти</h3>
              </Link>
              <Link title="Регистрация" to={'/signUp'}>
                <h3>Зарегистрироваться</h3>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
