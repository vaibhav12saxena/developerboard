import './App.css';
import { Button } from './components/atoms/Button';
import Home from './pages/home';
import ExampleForm from './features/exampleForm';

function App() {
  return (
    <>
      <div className="text-2xl font-bold text-center text-blue-600 mt-10">
        <Home />
        <Button
          variant="primary"
          children="click me"
          onClick={() => console.log('hello')}
        />
        <ExampleForm />
      </div>
    </>
  );
}

export default App;
