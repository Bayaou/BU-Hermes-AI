// src/App.tsx
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;