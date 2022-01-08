import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {
  return (
    <div className="App">
      <Nav />
      <hr></hr>
      <Routes>
        <Route path="/frontend" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
