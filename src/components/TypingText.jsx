// src/components/TypingText.jsx
import React, { useState, useEffect, useRef } from 'react';

const TypingText = ({ text, speed = 30, onComplete, showCursor = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastTimeRef = useRef(null);
  const requestRef = useRef(null);

  const animateTyping = (time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
    }

    const deltaTime = time - lastTimeRef.current;

    if (deltaTime >= speed && currentIndex < text.length) { // Afegeix condició per evitar "undefined"
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
      lastTimeRef.current = time;
    }

    if (currentIndex < text.length) {
      requestRef.current = requestAnimationFrame(animateTyping);
    } else if (onComplete) {
      onComplete();
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateTyping);

    return () => cancelAnimationFrame(requestRef.current);
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};

export default TypingText;
