import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../shared/hook/useAuth';

export default function PrivateRoute() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const loacation = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    useEffect(() => {
      if (!isAuth) {
        navigate('/login', { state: { from: loacation.pathname } });
      }
    })

    // <Navigate to="/login" state={{ from: location }} replace />
  );
}
