// src/components/Gift.jsx
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';
import { Button } from 'react-bootstrap';
import TypingText from './TypingText';

const Gift = ({ onOpenGift }) => {
  const [titleCompleted, setTitleCompleted] = useState(false);
  const [paragraphCompleted, setParagraphCompleted] = useState(false);
  const [showImage, setShowImage] = useState(false); // Estat per controlar la imatge de la carta
  const giftRef = useRef(null);

  useEffect(() => {
    if (!giftRef.current || showImage) return; // Si showImage és true, no carrega el regal de nou

    // Configuració Three.js per carregar l'objecte gift
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 2, 4);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;

    giftRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 5, 0);
    scene.add(directionalLight);

    // Carrega l'objecte gift
    const loader = new GLTFLoader();
    loader.load('/Interactive-3D-Room/model/gift.glb', (gltf) => {
      const giftObject = gltf.scene;
      giftObject.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      scene.add(giftObject);

      // Afegeix animacions d'escalat en hover
      const handleMouseOver = () => {
        gsap.to(giftObject.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
      };

      const handleMouseOut = () => {
        gsap.to(giftObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      };

      renderer.domElement.addEventListener('mouseover', handleMouseOver);
      renderer.domElement.addEventListener('mouseout', handleMouseOut);

      animate(); 
    }, undefined, function (error) {
      console.error('Error carregant el model:', error);
    });

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    return () => {
      if (giftRef.current) {
        giftRef.current.removeChild(renderer.domElement);
      }
    };
  }, [paragraphCompleted, showImage]);

  const handleGiftClick = () => {
    setShowImage(true); // Mostra la imatge de la carta
  };

  return (
    <div className="info-text" style={{ marginBottom: '0px' }}>
      {showImage ? (
        // Mostra la imatge de la carta i el botó
        <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}>
          <img 
            src="/Interactive-3D-Room/model/assets/letter.jpg" 
            alt="Letter" 
            style={{ width: '450px', height: 'auto', display: 'block' }}
          />
          <Button 
            variant="dark" 
            onClick={onOpenGift} 
            style={{ 
              position: 'absolute', 
              bottom: '140px', 
              left: '50%', 
              transform: 'translateX(-50%)' 
            }}
          >
            Open Gift
          </Button>
        </div>
      ) : (
        <>
          <h3>
            <TypingText
              text="Someone sent you a gift!"
              speed={15}
              onComplete={() => setTitleCompleted(true)}
              showCursor={!titleCompleted}
            />
          </h3>
          {titleCompleted && (
            <>
              <p>
                <TypingText
                  text="There is a letter outside the package."
                  speed={15}
                  onComplete={() => setParagraphCompleted(true)}
                  showCursor={!paragraphCompleted}
                />
              </p>
              {paragraphCompleted && (
                <div
                  ref={giftRef}
                  style={{ width: '220px', height: '220px', cursor: 'pointer' }}
                  onClick={handleGiftClick}
                ></div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Gift;
