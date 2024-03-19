import st from './Loader.module.css';
export const Loader = () => {
  return (
    <figure className={st.loader}>
      <div className={st.loader__item}></div>
      <div className={st.loader__item}></div>
      <div className={st.loader__item}></div>
      <div className={st.loader__item}></div>
      <div className={st.loader__item}></div>
      <div className={st.loader__item}></div>
      <div className={st.loader__item}></div>
      <div className={st.loader__item}></div>
    </figure>
  );
};
