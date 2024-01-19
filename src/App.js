import logo from './logo.svg';
import './App.css';

import './stylesheets/universal.css'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Inventory from './pages/Inventory';
import Footer from './pages/Footer';
import Product from './pages/Products';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="App">
      <Router>

        <div>
          < Nav />
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/p" element={<Product />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
          </Routes>
          < Footer />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
