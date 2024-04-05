import { UserType } from '../shared/reducers/slices/userSlice';
import { getParseItemsLS } from './localStorageUtils';

export const authenticateCredentials = (
  email: string,
  password: string,
): UserType => {
  let isAuth = false;
  const currentUser = getParseItemsLS(email);

  if (currentUser) {
    isAuth = password === currentUser.password && email === currentUser.email;
    if (isAuth) {
      return currentUser;
    }
  }

  return {
    email: '',
    password: '',
    cards: [],
    history: [],
  };
};

export const checkingUserAuthorization = () => {
  const currentUser = localStorage.getItem('online');
  return !!currentUser;
};
