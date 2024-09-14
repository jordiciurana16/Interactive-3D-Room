import React, { useState, useEffect } from 'react';
import StartButton from './components/StartButton';
import InfoText from './components/InfoText';
import InteractiveElements from './components/InteractiveElements';
import UserControls from './components/UserControls';
import LoadingBar from './components/LoadingBar';
import Scene from './components/Scene';
import UserInterface from './components/UserInterface'; // Nou component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [step, setStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showUserControls, setShowUserControls] = useState(true);
  const [likes, setLikes] = useState(0); // Estat per gestionar el número de "Likes"
  const [views, setViews] = useState(0); // Estat per gestionar el número de "Visites"
  const [allowInteraction, setAllowInteraction] = useState(false); // Estat per gestionar la interactivitat amb la Scene

  useEffect(() => {
    // Aquí pots inicialitzar els valors de "visites" i "likes" segons la tecnologia que facis servir
    setViews(950); // Exemples de valors inicials
    setLikes(643);
  }, []);

  const nextStep = () => {
    if (step === 3) {
      setShowUserControls(false);
      setAllowInteraction(true); // Permet la interacció després del quart pas
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const percentLoaded = Math.min((elapsedTime / 3000) * 100, 99);

      setLoadingProgress(percentLoaded);

      if (elapsedTime >= 3000) {
        clearInterval(interval);
        setLoadingProgress(100);
        setTimeout(() => {
          setLoadingComplete(true);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleStartClick = () => {
    nextStep();
  };

  return (
    <div className="App">
      <div className="canvas-container">
        <Scene moveCamera={step > 0} allowInteraction={allowInteraction} />
        {!loadingComplete ? (
          <LoadingBar progress={loadingProgress} />
        ) : (
          <>
            {step === 0 && <StartButton onClick={handleStartClick} />}
            {step === 1 && <InfoText onShowInteractiveElements={nextStep} />}
            {step === 2 && <InteractiveElements onShowUserControls={nextStep} />}
            {step === 3 && showUserControls && <UserControls onHide={nextStep} />}
          </>
        )}
        {/* Afegeix la interfície d'usuari a la pantalla */}
        <UserInterface likes={likes} views={views} />
      </div>
    </div>
  );
}

export default App;
