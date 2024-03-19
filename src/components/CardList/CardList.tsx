import st from './CardList.module.css';

interface CardListProps {
  children: JSX.Element[];
}

export const CardList = ({ children }: CardListProps) => {
  return <ul className={st.card__list}>{children}</ul>;
};
