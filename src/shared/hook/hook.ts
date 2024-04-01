import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../../app/providers/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useFavoritesSelector = () =>
  useAppSelector((state) => state.user.cards);
export const useEmailSelector = () =>
  useAppSelector((state) => state.user.email);
export const useHistorySelector = () =>
  useAppSelector((state) => state.user.history);
