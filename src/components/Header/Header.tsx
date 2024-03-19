import { Button } from '../../UI/Button/Button';
import { Search } from '../Search/Search';

import sl from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={sl.container}>
        <div className={sl.logo}>
          <a href="#">Книжная лавка</a>
        </div>
        <Search />
        <nav>
          <Button buttonName="Избранное" />
          <Button buttonName="Вход" />
          <Button buttonName="Регистрация" />
        </nav>
      </div>
    </header>
  );
};
