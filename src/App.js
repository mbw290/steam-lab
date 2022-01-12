import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import About from './components/pages/About'
import Offerings from './components/pages/Offerings';
import Samples from './components/pages/Samples';

function App() {
  return (
    <div className="App">
      <div className='bg-overlay'>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="mission" element={<Mission />} />
                <Route path="contact" element={<About />} />
                <Route path="offerings" element={<Offerings />} />
                <Route path="samples" element={<Samples />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
