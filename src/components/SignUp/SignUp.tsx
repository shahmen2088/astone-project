import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../shared/UI/Form/Form';
import { useAppDispatch } from '../../shared/hook/hook';
import { setUser } from '../../shared/reducers/slices/userSlice';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
        console.log('success');
      })
      .catch((error) => alert(error));
  };

  return (
    <Form
      title="Sign up"
      step="
      Already have an account?"
      stepPath="/login"
      handleClick={handleRegister}
    />
  );
};
