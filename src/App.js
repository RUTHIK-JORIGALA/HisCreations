
import './App.css';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Graphic from './pages/Graphic';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Pricing/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='services' element={<Graphic/>}/>
        <Route path='aboutUs' element={<AboutUs/>} />
        <Route path='contact' element={<Contact/>}/>
        <Route path='pricing' element={<Pricing/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
