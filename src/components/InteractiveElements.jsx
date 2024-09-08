// src/components/Introduction.jsx
import React from 'react';

const InteractiveElements = ({ onShowUserControls }) => (
    <div className="info-text">
    <h3>Interactions</h3>
    <p>
      From posters of my favorite films to videogames that marked me, every corner of this room tells a story.
    </p>
    <p>
        Feel free to explore and click around the interactive elements to discover more about each item and its significance!
    </p>
    <p> What are the clickable elements? Well, you'll have to find out.</p>
    
    {/* Botó per mostrar el següent component */}
    <button onClick={onShowUserControls} className="btn btn-dark">Next</button>
  </div>
);

export default InteractiveElements;
