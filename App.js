import React from 'react';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Lectii from './pages/Lectii';
import Lectie1 from './lectii/Lectie1'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/lectii" element={<Lectii />} />
        <Route path="/principiul-I-al-termodinamicii" element={<Lectie1/>} />
      </Routes>
  );
}

export default App;
