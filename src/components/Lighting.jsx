// src/components/Lighting.jsx
import React, { useEffect } from 'react';
import * as THREE from 'three';

const Lighting = ({ scene }) => {
  useEffect(() => {
    // Afegir llum ambiental suau
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    // Llum direccional per simular la llum del dia
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 5, 0);
    scene.add(directionalLight);

    // Esfera blava per visualitzar la posició de la llum puntual
    const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 5, -5);
    scene.add(sphere);

    return () => {
      scene.remove(ambientLight);
      scene.remove(directionalLight);
      scene.remove(sphere);
    };
  }, [scene]);

  return null;
};

export default Lighting;
