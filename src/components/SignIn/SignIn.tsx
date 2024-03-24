import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { Form } from '../../shared/UI/Form/Form';
import { useAppDispatch } from '../../shared/hook/hook';
import { setUser } from '../../shared/reducers/slices/userSlice';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/favourites');
      })
      .catch(() => alert('Invalid user!'));
  };

  return (
    <Form
      title="Sign in"
      step=" Create an account"
      stepPath="/register"
      handleClick={handleLogin}
    />
  );
};
