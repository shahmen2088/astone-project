import { createListenerMiddleware } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../../app/providers/store/store';
import {
  addNewUserLS,
  updateUserInfoLS,
  intitialStateLS,
  removeCurrentUserLS,
  setParamsUserLS,
} from '../../../utils/localStorageUtils';
import {
  addItemToCard,
  addItemToHistory,
  deleteFromCard,
  deleteItemToHistory,
  loginUser,
  removeUser,
  setUser,
} from './userSlice';

export const LSMiddleware = createListenerMiddleware();

const startListeningApp = LSMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

startListeningApp({
  actionCreator: setUser,
  effect: (action) => {
    if (action.payload.email) {
      addNewUserLS(action.payload.email, action.payload.password);
    }
  },
});

startListeningApp({
  actionCreator: loginUser,
  effect: (action) => {
    updateUserInfoLS(action.payload.email);
  },
});

startListeningApp({
  actionCreator: loginUser,
  effect: () => {
    intitialStateLS();
  },
});

startListeningApp({
  actionCreator: removeUser,
  effect: () => {
    removeCurrentUserLS();
  },
});

startListeningApp({
  actionCreator: addItemToCard,
  effect: (_, api) => {
    setParamsUserLS(api.getState().user.email, api.getState().user);
  },
});

startListeningApp({
  actionCreator: deleteFromCard,
  effect: (_, api) => {
    setParamsUserLS(api.getState().user.email, api.getState().user);
  },
});
startListeningApp({
  actionCreator: addItemToHistory,
  effect: (_, api) => {
    setParamsUserLS(api.getState().user.email, api.getState().user);
  },
});

startListeningApp({
  actionCreator: deleteItemToHistory,
  effect: (_, api) => {
    setParamsUserLS(api.getState().user.email, api.getState().user);
  },
});
