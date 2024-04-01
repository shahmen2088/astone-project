import { Outlet } from 'react-router';
import { Navigate, useLocation } from 'react-router-dom';
import { checkUserRegisterLS } from '../../utils/localStorageUtils';

export default function PrivateRoute() {
  const location = useLocation();
  const isAuthenticated = checkUserRegisterLS();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
