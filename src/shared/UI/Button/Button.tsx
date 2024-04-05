import st from './Button.module.css';
type Props = {
  value: string;
  onTouch: () => void;
};
export const Button = ({ value, onTouch }: Props) => {
  return (
    <button onClick={onTouch} className={st.btn}>
      {value}
    </button>
  );
};
