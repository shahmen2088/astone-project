import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  updateUserInfoLS,
  intitialStateLS,
} from '../../../utils/localStorageUtils';
import { Book } from '../../api/booksApi';

export type UserType = {
  email: string;
  password: string;
  cards: Book[];
  history: string[];
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
    loginUser: (state, action: PayloadAction<UserType>) => {
      const user = updateUserInfoLS(action.payload.email);
      state.email = user.email;
      state.password = user.password;
      state.cards = user.cards;
      state.history = user.history;
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
    addItemToHistory: (state, { payload }) => {
      state.history.push(payload);
    },
    // removeItemFromCard: (state, { payload }: PayloadAction<UserType>) => {
    //   let newCard = state.cards.filter(({ id }) => id !== payload);
    //   state.cards = newCard;
    // },
    // setCurrentUser:(state,action)=> {
    //   state.currentUser = action.payload;
    // },
    // startLoading:(state)=>{
    //   state.isLoading=true;
    // },
    // finishLoading:(state)=>{
    //   state.isLoading=false;
    //   },
  },
});

export const {
  setUser,
  loginUser,
  removeUser,
  addItemToCard,
  deleteFromCard,
  addItemToHistory,
} = userSlice.actions;

export default userSlice.reducer;
