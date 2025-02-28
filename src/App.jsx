import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Basket from './pages/basket/Basket';
import Voley from './pages/voley/Voley';
import Futbol from './pages/futbol/Futbol';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/futbol" element={<Futbol />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/voley" element={<Voley />} />
      </Routes>
    </Router>
  );
}

export default App;
