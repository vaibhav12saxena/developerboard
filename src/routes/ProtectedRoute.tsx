import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div className="text-center p-4">Loading...</div>;
  return !isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />;
};

export default ProtectedRoute;
