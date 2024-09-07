// src/App.jsx
import React from 'react';
import Scene from './components/Scene';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; // Importa el component Button de react-bootstrap

function App() {
  return (
    <div className="App text-center"> {/* Afegim la classe Bootstrap per alinear el text al centre */}
      <Scene />
      <Button variant="primary" className="mt-3">Start</Button> {/* Botó de Bootstrap amb espai superior */}
      <h4 className="mt-3">Take a tour of my room</h4> {/* Text amb espai superior */}
    </div>
  );
}

export default App;
