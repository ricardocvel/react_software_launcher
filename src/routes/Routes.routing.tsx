import { Navigate, Route, Routes, Outlet } from 'react-router';

export function PrivateRoutes() {
  const authin = true;

  return authin ? <Outlet /> : <Navigate to='/login' />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<p>home</p>} />
      <Route path='/portifolio' element={<p>portifolio</p>} />

      <Route element={<PrivateRoutes />}>
        <Route path='/settings' element={<p>settings</p>} />
        <Route path='/user-form' element={<p>user form</p>} />
      </Route>

      <Route path='*' element={<Navigate to='/portifolio' />} />
    </Routes>
  );
}
