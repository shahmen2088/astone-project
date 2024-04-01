import { UserType } from '../shared/reducers/slices/userSlice';

export const addNewUserLS = (email: string, password: string) => {
  if (email) {
    localStorage.setItem(
      email,
      JSON.stringify({
        email: email,
        password: password,
        cards: [],
        history: [],
      }),
    );
  }
  const user = localStorage.getItem(email);
  if (user) {
    const parsedUser = JSON.parse(user);
    localStorage.setItem('online', parsedUser.email);
  }
};

export const updateUserInfoLS = (email: string): UserType => {
  const user = localStorage.getItem(email);
  if (user) {
    const parsedUser = JSON.parse(user);
    localStorage.setItem('online', parsedUser.email);
    return {
      email: parsedUser.email,
      password: parsedUser.password,
      cards: parsedUser.cards,
      history: parsedUser.history,
    };
  }
  return {
    email: '',
    password: '',
    cards: [],
    history: [],
  };
};

export const checkUserRegisterLS = () => {
  return localStorage.getItem('online');
}; //Проверяем авторизацию  пользователя

export const removeCurrentUserLS = () => {
  localStorage.removeItem('online');
}; //Выход пользователя

export const intitialStateLS = (): UserType => {
  const email = localStorage.getItem('online');
  if (email) {
    return updateUserInfoLS(email);
  }
  return {
    email: '',
    password: '',
    cards: [],
    history: [],
  };
}; //Инициализация при обновлении страницы

export const getParseItemsLS = (email: string) => {
  const items = localStorage.getItem(email);
  let parseItem;
  if (items) {
    parseItem = JSON.parse(items);
    return parseItem;
  }
};

export const setParamsUser = (email: string, data: UserType) => {
  localStorage.setItem(email, JSON.stringify(data));
};
