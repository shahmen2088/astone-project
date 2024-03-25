import { redirect } from 'react-router-dom';
import { useAuth } from '../../shared/hook/useAuth';

export default function FavouritesPage() {
  const { isAuth } = useAuth();
  return isAuth ? <div>FavouritesPage: </div> : <>{redirect('/login')}</>;
}
