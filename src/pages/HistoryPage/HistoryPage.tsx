import { Link } from 'react-router-dom';
import { useHistorySelector } from '../../shared/hook/hook';

export default function HistoryPage() {
  const history = useHistorySelector();
  if (!history) {
    return;
  }
  const arr = history.map((item, index) => {
    return (
      <li key={index}>
        <Link to={`${item}`}>{item}</Link>
        {item}
      </li>
    );
  });

  return (
    <div>
      <ul>{arr}</ul>
    </div>
  );
}
