import { useAuth } from '../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 flex justify-between">
        <h1 className="text-xl font-semibold">My App</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </header>
      <main className="p-4">
        {/* This renders child routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
