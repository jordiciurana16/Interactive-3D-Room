// src/components/UserControls.jsx
import React from 'react';

const UserControls = ({ onHide }) => (
  <div className="info-text">
    <h3>Controls to move around</h3>
    <p>
      Use the controls below to zoom in, zoom out, or change the camera angles while exploring the room.
    </p>
    <ul>
      <li><strong>Zoom in/out:</strong> Use the mouse wheel.</li>
      <li><strong>Rotate angle:</strong> Drag the mouse.</li>
      <li><strong>Move camera:</strong> Hold <kbd>Shift</kbd> and drag the mouse.</li>
    </ul>
    {/* Botó per ocultar el component */}
    <button className="btn btn-dark" onClick={onHide}>Next</button>
  </div>
);

export default UserControls;
