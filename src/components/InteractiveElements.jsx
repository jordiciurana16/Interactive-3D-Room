import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TypingText from './TypingText';

const InteractiveElements = ({ onShowUserControls }) => {
  const [titleCompleted, setTitleCompleted] = useState(false);
  const [secondParagraphCompleted, setSecondParagraphCompleted] = useState(false); // Estat per controlar el segon paràgraf
  const [lastParagraphCompleted, setLastParagraphCompleted] = useState(false);

  return (
    <div className="info-text">
      <h3>
        <TypingText 
          text="Interactive elements" 
          speed={15} 
          onComplete={() => setTitleCompleted(true)} 
          showCursor={!titleCompleted}
        />
      </h3>
      {titleCompleted && (
        <>
          <p>
            <TypingText 
              text="Feel free to explore and click around the interactive elements to discover more about each item and its significance!" 
              speed={15} 
              onComplete={() => setSecondParagraphCompleted(true)} // Actualitza l'estat quan el segon paràgraf es completa
              showCursor={!secondParagraphCompleted}
            />
          </p>
        </>
      )}
      {secondParagraphCompleted && (
        <>
          <p>
            <TypingText 
              text="What are the clickable elements? Well, you'll have to find out." 
              speed={15} 
              onComplete={() => setLastParagraphCompleted(true)} // Actualitza l'estat quan l'últim text es completa
              showCursor={true}
            />
          </p>
          {/* Mostra el botó només quan l'últim paràgraf estigui complet */}
          {lastParagraphCompleted && (
            <Button variant="dark" onClick={onShowUserControls}>
              Next
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default InteractiveElements;
