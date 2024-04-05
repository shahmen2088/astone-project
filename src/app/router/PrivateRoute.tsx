import { Outlet } from 'react-router';
import { Navigate } from 'react-router-dom';
import { checkingUserAuthorization } from '../../utils/userVerificationUtils';

export default function PrivateRoute() {
  const isAuthenticated = checkingUserAuthorization();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
