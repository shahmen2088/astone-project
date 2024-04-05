import { Link } from 'react-router-dom';
import { useAppDispatch, useHistorySelector } from '../../shared/hook/hook';
import { deleteItemToHistory } from '../../shared/reducers/slices/userSlice';
import st from './HistoryPage.module.css';

export default function HistoryPage() {
  const dispatch = useAppDispatch();
  const history = useHistorySelector();

  if (!history) {
    return;
  }

  const deleteItemHistory = (item: string) => {
    dispatch(deleteItemToHistory(item));
  };

  const historyList = history.map((item, index) => {
    return (
      <li className={st.history_item} key={index}>
        <Link to={`${item.link}`}>
          <div className={st.history_item_inner}>
            <p>
              {item.time} {item.text}
            </p>
            <button
              className={st.delete_history}
              onClick={(e) => {
                e.preventDefault();
                deleteItemHistory(item.time);
              }}
            >
              Удалить
            </button>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className={st.container}>
      <h3 className={st.history_title}>История поиска</h3>
      <ul className={st.histories}>
        {history.length ? historyList : <p>Вы еще ничего не искали</p>}
      </ul>
    </div>
  );
}
