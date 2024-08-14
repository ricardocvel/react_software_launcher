import { Navigate, Outlet } from 'react-router';

export function PrivateRoutes() {
  const authin = true;

  return authin ? <Outlet /> : <Navigate to='/login' />;
}
