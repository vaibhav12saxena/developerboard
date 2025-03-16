import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';
  
import { PublicRoutes } from './publicRoutes';
import { PrivateRoutes } from './privateRoutes';
import NotFound from '../pages/NotFound';

export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {PublicRoutes}
      {PrivateRoutes}
      {<Route path="*" element={<NotFound />} />}
    </>
  )
);
