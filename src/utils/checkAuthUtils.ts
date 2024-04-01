import { getParseItemsLS } from './localStorageUtils';

export const checkIsAuth = (email: string, password: string) => {
  let isAuth = false;
  const currentUser = getParseItemsLS(email);
  if (currentUser) {
    isAuth = password === currentUser.password && email === currentUser.email;
    return isAuth;
  }
  return isAuth;
};
