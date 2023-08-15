import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="navbar">
        <h1>Math Magician</h1>
        <nav>
          <ul className="ul-ele">
            <li className="home">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
