// src/components/InfoText.jsx
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TypingText from './TypingText';

const InfoText = ({ onShowInteractiveElements }) => {
  const [titleCompleted, setTitleCompleted] = useState(false);
  const [firstParagraphCompleted, setFirstParagraphCompleted] = useState(false);
  const [lastParagraphCompleted, setLastParagraphCompleted] = useState(false); // Nou estat per controlar l'últim paràgraf

  return (
    <div className="info-text">
      <h3>
        <TypingText 
          text="Welcome to my room" 
          speed={15} 
          onComplete={() => setTitleCompleted(true)} 
          showCursor={!titleCompleted}
        />
      </h3>
      {titleCompleted && (
        <p>
          <TypingText 
            text="Hello world! I'm Jordi, a digital communicator passionate about interactive experiences based in Barcelona." 
            speed={15} 
            onComplete={() => setFirstParagraphCompleted(true)} 
            showCursor={!firstParagraphCompleted}
          />
        </p>
      )}
      {firstParagraphCompleted && (
        <>
          <p>
            <TypingText 
              text="To get to know me a bit better, take a tour of my room!" 
              speed={15} 
              onComplete={() => setLastParagraphCompleted(true)} // Actualitza l'estat quan l'últim text s'ha completat
              showCursor={true}
            />
          </p>
          {/* Mostra el botó només quan l'últim paràgraf estigui complet */}
          {lastParagraphCompleted && (
            <Button variant="dark" onClick={onShowInteractiveElements}>
              Next
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default InfoText;
