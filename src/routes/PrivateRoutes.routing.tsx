import { Navigate, Outlet } from 'react-router';

export function PrivateRoutes() {
  const authin = false;

  return authin ? <Outlet /> : <Navigate to='/login' />;
}
