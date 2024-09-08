// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import StartButton from './components/StartButton';
import InfoText from './components/InfoText';
import InteractiveElements from './components/InteractiveElements';
import UserControls from './components/UserControls';
import LoadingBar from './components/LoadingBar';
import Scene from './components/Scene';
import SettingsButton from './components/SettingsButton'; // Nou component per al botó de configuració
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [step, setStep] = useState(0); // Estat per gestionar el pas actual
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showUserControls, setShowUserControls] = useState(true); // Estat per controlar la visibilitat del component UserControls
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Estat per controlar si la música està en reproducció
  const audioRef = useRef(null); // Referència per a l'objecte d'àudio

  // Funció per avançar al següent pas
  const nextStep = () => {
    if (step === 3) {
      setShowUserControls(false); // Amaga el component UserControls quan arribi al pas 3
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

  useEffect(() => {
    // Crea un objecte d'àudio i guarda-ho en la referència
    audioRef.current = new Audio('/model/assets/freeflow.mp3');
    audioRef.current.loop = true;
    audioRef.current.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  }, []);

  const handleStartClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
    nextStep(); // Avança al següent pas
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
      setIsMusicPlaying(!isMusicPlaying); // Alterna l'estat de la música
    }
  };

  return (
    <div className="App">
      <div className="canvas-container">
        <SettingsButton isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} /> {/* Passa l'estat i la funció */}
        <Scene moveCamera={step > 0} />
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
      </div>
    </div>
  );
}

export default App;
