import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

const Pokeball = ({ onShowPokeball }) => {
  const pokeballRef = useRef(null);
  let pokeballObject;

  useEffect(() => {
    if (!pokeballRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0.1, 0.4);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(100, 100);
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
      pokeballObject.scale.set(1, 1, 1);
      scene.add(pokeballObject);

      // Funcions per a l'animació de hover
      const handleMouseOver = () => {
        gsap.to(pokeballObject.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
        document.body.style.cursor = 'pointer';
      };

      const handleMouseOut = () => {
        gsap.to(pokeballObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        document.body.style.cursor = 'default';
      };

      // Esdeveniment de clic per reproduir el so i fer visible la pokeball a Scene
      const handleClick = () => {
        if (onShowPokeball) onShowPokeball();
        if (onHidePokeball) onHidePokeball(); // Crida la funció per deixar de renderitzar el component
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
      document.body.style.cursor = 'default';
    };
  }, [onShowPokeball]);

  return (
    <div className="info-text" style={{ marginBottom: '0px', position: 'absolute', zIndex: 2, top: '10%', left: '5%' }}>
      <h3>It's a pokèmon!</h3>
      <div ref={pokeballRef} style={{ width: '100px', height: '100px', marginTop: '10px', position: 'relative', cursor: 'pointer' }}></div>
    </div>
  );
};

export default Pokeball;
