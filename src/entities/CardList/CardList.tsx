import st from './CardList.module.css';

interface Props {
  children: JSX.Element[];
}

export const CardList = ({ children }: Props) => {
  return <ul className={st.card__list}>{children}</ul>;
};
