import { Link } from 'react-router-dom';
import { Search } from '../../features/Search/Search';

import sl from './Header.module.css';

export const Header = () => {
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
          <Link to={'/login'}>Избранное</Link>
          <Link to={'/login'}>Вход</Link>
          <Link to={'/register'}>Регистрация</Link>
        </nav>
      </div>
    </header>
  );
};
