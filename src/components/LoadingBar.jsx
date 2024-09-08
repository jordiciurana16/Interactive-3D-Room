import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const LoadingBar = ({ progress }) => (
  <div className="loading-bar">
    <ProgressBar now={progress} variant="dark" animated /> {/* Color dark de la barra amb animació */}
    <h4 className="percentage text-center mt-2">{progress.toFixed(0)}%</h4> {/* Centrat al mig */}
  </div>
);

export default LoadingBar;
