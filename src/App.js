import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import About from './components/pages/About'
import Offerings from './components/pages/Offerings';
import Samples from './components/pages/Samples';

function App() {
  return (
    <div className="App">
      <div className='bg-overlay'>
      <Navigation />
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route index element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/samples" element={<Samples />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
