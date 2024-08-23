import { Route, Routes } from 'react-router';
import { PrivateRoutes } from './PrivateRoutes.routing';
import Home from 'pages/home/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/teste' element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path='/page_two' element={<p>page_two</p>} />
      </Route>

      <Route path='/login' element={<p>login</p>} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}
