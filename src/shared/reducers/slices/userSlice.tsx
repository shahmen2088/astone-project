import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { intitialStateLS } from '../../../utils/localStorageUtils';
import { Book } from '../../api/booksApi';

export type History = {
  text: string;
  link: string;
  time: string;
};

export type UserType = {
  email: string;
  password: string;
  cards: Book[];
  history: History[];
};

const initialState: UserType = intitialStateLS();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserType>) => {
      state.email = payload.email;
      state.password = payload.password;
      state.cards = payload.cards;
      state.history = payload.history;
    },
    loginUser: (state, { payload }: PayloadAction<UserType>) => {
      state.email = payload.email;
      state.password = payload.password;
      state.cards = payload.cards;
      state.history = payload.history;
    },
    removeUser: (state) => {
      state.email = '';
      state.password = '';
      state.cards = [];
      state.history = [];
    },
    addItemToCard: (state, { payload }: PayloadAction<Book>) => {
      let newCard = [...state.cards];
      const found = state.cards.find(({ id }) => id === payload.id);
      if (found) {
        newCard = newCard.map((item) => {
          return item.id === payload.id ? { ...item } : item;
        });
      } else {
        newCard.push({ ...payload });
      }
      state.cards = newCard;
    },
    deleteFromCard: (state, { payload }: PayloadAction<string>) => {
      state.cards = state.cards.filter((book) => book.id !== payload);
    },
    addItemToHistory: (state, { payload }: PayloadAction<History>) => {
      state.history.push(payload);
    },
    deleteItemToHistory: (state, { payload }: PayloadAction<string>) => {
      state.history = state.history.filter((item) => item.time !== payload);
    },
  },
});

export const {
  setUser,
  loginUser,
  removeUser,
  addItemToCard,
  deleteFromCard,
  addItemToHistory,
  deleteItemToHistory,
} = userSlice.actions;

export default userSlice.reducer;
