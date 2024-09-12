import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

const Pokeball = () => {
  const pokeballRef = useRef(null);
  const [sound] = useState(() => new Audio('/Interactive-3D-Room/model/assets/sound/pokeball.mp3')); // Càrrega del so
  let pokeballObject;

  useEffect(() => {
    if (!pokeballRef.current) return;

    // Configuració Three.js per carregar l'objecte Pokeball
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000); // Relació d'aspecte 1:1 per un canvas quadrat
    camera.position.set(0, 0.1, 0.4); // Apropa encara més la càmera a la Pokeball
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(100, 100); // Ajusta el canvas a 100x100 píxels
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;

    pokeballRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 5, 0);
    scene.add(directionalLight);

    // Carrega l'objecte Pokeball
    const loader = new GLTFLoader();
    loader.load('/Interactive-3D-Room/model/pokeball.glb', (gltf) => {
      pokeballObject = gltf.scene;
      pokeballObject.scale.set(1, 1, 1); // Assegura que l'escala sigui uniforme per evitar distorsió
      scene.add(pokeballObject);

      // Afegeix funcionalitat de hover per a escalar la Pokeball
      const handleMouseOver = () => {
        gsap.to(pokeballObject.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 }); // Augmenta l'escala en fer hover
        document.body.style.cursor = 'pointer'; // Canvia el cursor a pointer
      };

      const handleMouseOut = () => {
        gsap.to(pokeballObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 }); // Torna l'escala a normal
        document.body.style.cursor = 'default'; // Torna el cursor a normal
      };

      // Afegeix esdeveniment de clic per reproduir el so
      const handleClick = () => {
        sound.play(); // Reprodueix el so
      };

      // Afegeix els esdeveniments al canvas
      renderer.domElement.addEventListener('mouseover', handleMouseOver);
      renderer.domElement.addEventListener('mouseout', handleMouseOut);
      renderer.domElement.addEventListener('click', handleClick);

      animatePokeball();
    }, undefined, function (error) {
      console.error('Error carregant el model de la Pokeball:', error);
    });

    function animatePokeball() {
      requestAnimationFrame(animatePokeball);
      controls.update();
      renderer.render(scene, camera);
    }

    return () => {
      if (pokeballRef.current) {
        pokeballRef.current.removeChild(renderer.domElement);
      }
      document.body.style.cursor = 'default'; // Assegura que el cursor torni a ser normal quan es desmunti el component
    };
  }, [sound]);

  return (
    <div className="info-text" style={{ marginBottom: '0px', position: 'absolute', zIndex: 2, top: '10%', left: '5%' }}>
      <h3>It's a pokèmon!</h3>
      <p>Click on the pokeball and let it out.</p>
      <div ref={pokeballRef} style={{ width: '100px', height: '100px', marginTop: '10px', position: 'relative', cursor:'pointer' }}></div> {/* Ajusta la mida del contenidor */}
    </div>
  );
};

export default Pokeball;
