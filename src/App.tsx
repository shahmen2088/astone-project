import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchBooks('java'));
  // }, [dispatch]);
  return (
    <>
      <Header />
      <Main />
      <footer></footer>
    </>
  );
}

export default App;
