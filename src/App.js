import './App.css';
import HomePage from './page/HomePage';
import NormalPage from './page/NormalPage';
import ReactQueryPage from './page/ReactQueryPage';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="wrap">
      <nav style={{ backgroundColor: '#92b3f0', padding: '20px' }}>
        <Link to="/" style={{ margin: '20px' }}>
          Home
        </Link>
        <Link to="/normal" style={{ margin: '20px' }}>
          Normal
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/normal" element={<NormalPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
