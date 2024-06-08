import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Projects from './components/Projects/Projects';
import Creations from './components/Creations/Creations';
import Explore from './components/Explore/Explore';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my_creations" element={<Creations />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}
