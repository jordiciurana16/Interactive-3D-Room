// src/components/InfoText.jsx
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TypingText from './TypingText';

const InfoText = ({ onShowInteractiveElements }) => {
  const [titleCompleted, setTitleCompleted] = useState(false);
  const [firstParagraphCompleted, setFirstParagraphCompleted] = useState(false);

  return (
    <div className="info-text">
      <h3>
        <TypingText 
          text="Welcome to my room" 
          speed={100} // Assegura't que el valor de speed és 100
          onComplete={() => setTitleCompleted(true)} 
        />
      </h3>
      {titleCompleted && (
        <p>
          <TypingText 
            text="Hello world! I'm Jordi, a digital communicator passionate about interactive experiences based in Barcelona." 
            speed={100} 
            onComplete={() => setFirstParagraphCompleted(true)} 
          />
        </p>
      )}
      {firstParagraphCompleted && (
        <>
          <p>
            <TypingText 
              text="To get to know me a bit better, take a tour of my room!" 
              speed={100} 
            />
          </p>
          <Button variant="dark" onClick={onShowInteractiveElements}>
            Next
          </Button>
        </>
      )}
    </div>
  );
};

export default InfoText;
