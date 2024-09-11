import React, { useState } from 'react';
import TypingText from './TypingText';

const UserControls = ({ onHide }) => {
  const [titleCompleted, setTitleCompleted] = useState(false);
  const [firstParagraphCompleted, setFirstParagraphCompleted] = useState(false);
  const [firstListItemCompleted, setFirstListItemCompleted] = useState(false);
  const [secondListItemCompleted, setSecondListItemCompleted] = useState(false);
  const [lastListItemCompleted, setLastListItemCompleted] = useState(false);

  return (
    <div className="info-text">
      <h3>
        <TypingText 
          text="Controls to move around" 
          speed={15} 
          onComplete={() => setTitleCompleted(true)} 
          showCursor={!titleCompleted}
        />
      </h3>
      {titleCompleted && (
        <p>
          <TypingText 
            text="Use the controls below to zoom in, zoom out, or change the camera angles while exploring the room." 
            speed={15} 
            onComplete={() => setFirstParagraphCompleted(true)} 
            showCursor={!firstParagraphCompleted}
          />
        </p>
      )}
      {firstParagraphCompleted && (
        <ul>
          <li>
            <TypingText 
              text="Zoom in/out: Use the mouse wheel." 
              speed={15} 
              onComplete={() => setFirstListItemCompleted(true)} 
              showCursor={false}
            />
          </li>
          {firstListItemCompleted && (
            <li>
              <TypingText 
                text="Rotate angle: Drag the mouse." 
                speed={15} 
                onComplete={() => setSecondListItemCompleted(true)} 
                showCursor={false}
              />
            </li>
          )}
          {secondListItemCompleted && (
            <li>
              <TypingText 
                text="Move camera: Hold Shift and drag the mouse." 
                speed={15} 
                onComplete={() => setLastListItemCompleted(true)} 
                showCursor={false}
              />
            </li>
          )}
        </ul>
      )}
      {/* Mostra el botó només quan tots els elements de la llista estiguin complets */}
      {lastListItemCompleted && (
        <button className="btn btn-dark" onClick={onHide}>Next</button>
      )}
    </div>
  );
};

export default UserControls;
