// src/App.jsx
import React, { useState } from 'react';
import Scene from './components/Scene';
import StartButton from './components/StartButton'; // Nou component per al botó d'inici
import InfoText from './components/InfoText'; // Nou component per al text informatiu
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showStart, setShowStart] = useState(true); // Estat per mostrar el botó i el text inicial

  const handleStartClick = () => {
    setShowStart(false); // Amaga el botó i el text inicial
  };

  return (
    <div className="App">
      <div className="canvas-container">
        <Scene moveCamera={!showStart} /> {/* Passa la informació per moure la càmera com a prop */}
        {showStart ? (
          <>
            <StartButton onClick={handleStartClick} />
          </>
        ) : (
          <InfoText /> 
        )}
      </div>
    </div>
  );
}

export default App;
