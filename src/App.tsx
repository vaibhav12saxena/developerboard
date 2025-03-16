import './App.css';
import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/Approutes';

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  );
}

export default App;
