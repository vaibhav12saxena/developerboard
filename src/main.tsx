import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/Approutes';
import { AuthProvider } from './context/auth/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={AppRoutes} />
    </AuthProvider>
  </StrictMode>
);
