// src/components/SettingsButton.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaMusic, FaVolumeUp, FaCamera, FaRedo, FaTools, FaCog, FaBan } from 'react-icons/fa'; // Importa FaBan

const SettingsButton = ({ isMusicPlaying, toggleMusic }) => {
  return (
    <div className="settings-button">
      <Dropdown>
        {/* Utilitzem la icona FaCog com a botó per desplegar el menú */}
        <Dropdown.Toggle
          as="span"
          className="settings-icon"
          id="dropdown-custom-components"
        >
          <FaCog />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={toggleMusic}>
            {isMusicPlaying ? <FaMusic className="me-2" /> : <FaBan className="me-2" />} Music {/* Utilitza FaBan per indicar música desactivada */}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <FaVolumeUp className="me-2" /> Sound effects
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <FaCamera className="me-2" /> Reset camera
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">
            <FaRedo className="me-2" /> Restart game
          </Dropdown.Item>
          <Dropdown.Item href="#/action-5">
            <FaTools className="me-2" /> Development
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SettingsButton;
