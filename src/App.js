import './App.css';
import Home from './page/Home';
import ReactQuery from './page/ReactQuery';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <nav style={{ backgroundColor: '#92b3f0', padding: '20px' }}>
        <Link to="/" style={{ margin: '20px' }}>
          Home
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-query" element={<ReactQuery />} />
      </Routes>
    </div>
  );
}

export default App;
