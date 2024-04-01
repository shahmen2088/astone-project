import { Outlet } from 'react-router';
import { Navigate } from 'react-router-dom';
import { checkUserRegisterLS } from '../../utils/localStorageUtils';

export default function PrivateRoute() {
  const isAuthenticated = checkUserRegisterLS();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
