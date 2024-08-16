import { Navigate, Route, Routes } from 'react-router';
import { PrivateRoutes } from './PrivateRoutes.routing';
import Home from 'pages/home/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page_two' element={<p>page_two</p>} />

      <Route element={<PrivateRoutes />}>
        <Route path='/page_tree' element={<p>page_tree</p>} />
      </Route>

      <Route path='/login' element={<p>login</p>} />
      <Route path='*' element={<Navigate to='/page_two' />} />
    </Routes>
  );
}
