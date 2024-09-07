// src/components/StartButton.jsx
import React from 'react';
import { Button } from 'react-bootstrap';

const StartButton = ({ onClick }) => (
  <>
    <Button variant="primary" className="start-button" onClick={onClick} size="lg">
      Start
    </Button>
    <h4 className="tour-text">Take a tour of my room</h4>
  </>
);

export default StartButton;
