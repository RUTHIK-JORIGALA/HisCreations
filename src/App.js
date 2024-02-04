
import './App.css';
import Graphic from './pages/Graphic';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='graphic' element={<Graphic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
