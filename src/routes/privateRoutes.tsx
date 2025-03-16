import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import AppLayout from '../layouts/AppLayout';
import ProtectedRoute from './ProtectedRoute';

export const PrivateRoutes = (
  <Route element={<ProtectedRoute />}>
    <Route element={<AppLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Route>
  </Route>
);
