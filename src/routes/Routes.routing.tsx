import { Navigate, Route, Routes, Outlet } from 'react-router';
import {PrivateRoutes} from './PrivateRoutes.routing'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<p>home</p>} />
      <Route path='/portifolio' element={<p>portifolio</p>} />

      <Route element={<PrivateRoutes />}>
        <Route path='/settings' element={<p>settings</p>} />
        <Route path='/user-form' element={<p>user form</p>} />
      </Route>

      <Route path='/login' element={<p>login</p>} />
      <Route path='*' element={<Navigate to='/portifolio' />} />
    </Routes>
  );
}
