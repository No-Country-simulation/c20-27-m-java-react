import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Medicos from "./Pages/Medicos";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="Medicos" element={<Medicos />} />
        {/* Puedes añadir más rutas aquí si tienes más páginas */}
      </Routes>
    </Router>
  );
}

export default App;

