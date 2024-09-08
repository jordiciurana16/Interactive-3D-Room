import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AudioLoader, AudioListener, Audio } from 'three';

const Scene = ({ moveCamera, onLoadingProgress }) => {
  const mountRef = useRef(null);
  const cameraRef = useRef(); // Referència a la càmera

  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const d = 7.5;

    // Crear i guardar la càmera en una referència
    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
    camera.position.set(5, 2, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    cameraRef.current = camera; // Emmagatzema la càmera en la referència

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    currentMount.appendChild(renderer.domElement);

    renderer.setClearColor(0xffffff);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 5, 0);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let movieCounter, fantasticMrFox;
    let eStataLaManoDiDio, theTrumanShow, forrestGump;
    let creeperHead, enderHead, skeletonHead;
    let paintingCounter, greatWave, persistenceMemory, theScream, venusBirth;
    let headCounter;

    loader.manager.onProgress = function (item, loaded, total) {
      const progress = (loaded / total) * 100;
      onLoadingProgress(progress);
    };

    loader.load('./model/room.glb', function (gltf) {
      scene.add(gltf.scene);

      movieCounter = gltf.scene.getObjectByName('movieCounter');
      fantasticMrFox = gltf.scene.getObjectByName('fantasticMrFox');
      eStataLaManoDiDio = gltf.scene.getObjectByName('eStataLaManoDiDio');
      theTrumanShow = gltf.scene.getObjectByName('theTrumanShow');
      forrestGump = gltf.scene.getObjectByName('forrestGump');

      paintingCounter = gltf.scene.getObjectByName('paintingCounter');
      greatWave = gltf.scene.getObjectByName('greatWave');
      persistenceMemory = gltf.scene.getObjectByName('persistenceMemory');
      theScream = gltf.scene.getObjectByName('theScream');
      venusBirth = gltf.scene.getObjectByName('venusBirth');

      headCounter = gltf.scene.getObjectByName('headCounter');
      creeperHead = gltf.scene.getObjectByName('creeper');
      enderHead = gltf.scene.getObjectByName('ender');
      skeletonHead = gltf.scene.getObjectByName('skeleton');

      if (movieCounter) movieCounter.visible = false;
      if (fantasticMrFox) fantasticMrFox.visible = true;
      if (eStataLaManoDiDio) eStataLaManoDiDio.visible = false;
      if (theTrumanShow) theTrumanShow.visible = false;
      if (forrestGump) forrestGump.visible = false;

      if (paintingCounter) paintingCounter.visible = false;
      if (greatWave) greatWave.visible = true;
      if (persistenceMemory) persistenceMemory.visible = false;
      if (theScream) theScream.visible = false;
      if (venusBirth) venusBirth.visible = false;

      if (headCounter) headCounter.visible = false;
      if (creeperHead) creeperHead.visible = true;
      if (enderHead) enderHead.visible = false;
      if (skeletonHead) skeletonHead.visible = false;

      animate();
    }, undefined, function (error) {
      console.error(error);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.update();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let creeperClickState = 0;
    let movieClickState = 0;
    let paintingClickState = 0;
    let headClickState = 0;

    const listener = new THREE.AudioListener();
    camera.add(listener);

    const soundCreeper = new THREE.Audio(listener);
    const soundEnder = new THREE.Audio(listener);
    const soundSkeleton = new THREE.Audio(listener);

    const audioLoader = new THREE.AudioLoader();

    function loadSounds() {
      audioLoader.load('/model/assets/sound/creeper.mp3', function (buffer) {
        soundCreeper.setBuffer(buffer);
        soundCreeper.setLoop(false);
        soundCreeper.setVolume(0.5);
      });

      audioLoader.load('/model/assets/sound/ender.mp3', function (buffer) {
        soundEnder.setBuffer(buffer);
        soundEnder.setLoop(false);
        soundEnder.setVolume(0.5);
      });

      audioLoader.load('/model/assets/sound/skeleton.mp3', function (buffer) {
        soundSkeleton.setBuffer(buffer);
        soundSkeleton.setLoop(false);
        soundSkeleton.setVolume(0.5);
      });
    }

    // Detecta el moviment del ratolí i actualitza el cursor
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Detecta la intersecció amb els objectes específics
      const intersects = raycaster.intersectObjects([movieCounter, paintingCounter, headCounter].filter(Boolean), true);

      // Canvia el cursor a pointer si es fa hover sobre algun objecte
      if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = 'default';
      }
    };

    window.addEventListener('mousemove', onMouseMove); // Afegir event listener per "mousemove"

    function switchToDayScene() {
      directionalLight.intensity = 1;
      ambientLight.intensity = 0.4;
    }

    function switchToNightScene() {
      directionalLight.intensity = 0.1;
      ambientLight.intensity = 0.1;
    }

    function onMouseClick(event) {
      event.preventDefault();
      if (event.touches) {
        mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
      } else {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let selectedObject = intersects[0].object;

        if (selectedObject.name === 'movieCounter') {
          console.log('Clic detectat a movieCounter');

          movieClickState = (movieClickState + 1) % 4;

          if (fantasticMrFox) fantasticMrFox.visible = false;
          if (eStataLaManoDiDio) eStataLaManoDiDio.visible = false;
          if (theTrumanShow) theTrumanShow.visible = false;
          if (forrestGump) forrestGump.visible = false;

          if (movieClickState === 0 && fantasticMrFox) {
            fantasticMrFox.visible = true;
          } else if (movieClickState === 1 && forrestGump) {
            forrestGump.visible = true;
          } else if (movieClickState === 2 && eStataLaManoDiDio) {
            eStataLaManoDiDio.visible = true;
          } else if (movieClickState === 3 && theTrumanShow) {
            theTrumanShow.visible = true;
          }

          console.log('Pel·lícula visible:', movieClickState);
        }

        if (selectedObject.name === 'paintingCounter') {
          console.log('Clic detectat a paintingCounter');

          paintingClickState = (paintingClickState + 1) % 4;

          if (greatWave) greatWave.visible = false;
          if (persistenceMemory) persistenceMemory.visible = false;
          if (theScream) theScream.visible = false;
          if (venusBirth) venusBirth.visible = false;

          if (paintingClickState === 0 && greatWave) {
            greatWave.visible = true;
          } else if (paintingClickState === 1 && persistenceMemory) {
            persistenceMemory.visible = true;
          } else if (paintingClickState === 2 && theScream) {
            theScream.visible = true;
          } else if (paintingClickState === 3 && venusBirth) {
            venusBirth.visible = true;
          }

          console.log('Quadre visible:', paintingClickState);
        }

        if (selectedObject.name === 'headCounter') {
          console.log('Clic detectat a headCounter');

          headClickState = (headClickState + 1) % 3;

          if (creeperHead) creeperHead.visible = false;
          if (enderHead) enderHead.visible = false;
          if (skeletonHead) skeletonHead.visible = false;

          if (headClickState === 0 && creeperHead) {
            creeperHead.visible = true;
            soundCreeper.play();
          } else if (headClickState === 1 && enderHead) {
            enderHead.visible = true;
            soundEnder.play();
          } else if (headClickState === 2 && skeletonHead) {
            skeletonHead.visible = true;
            soundSkeleton.play();
          }

          console.log('Cap visible:', headClickState);
        }

        while (selectedObject.parent && selectedObject.parent.type !== 'Scene' && selectedObject.name !== 'creeper') {
          selectedObject = selectedObject.parent;
        }
      }
    }

    function init() {
      loadSounds();
      window.addEventListener('click', onMouseClick);
      window.addEventListener('touchstart', onMouseClick);

      window.addEventListener('keydown', function (event) {
        if (event.key === 'd') {
          switchToDayScene();
        } else if (event.key === 'n') {
          switchToNightScene();
        }
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', function () {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.left = -d * width / height;
      camera.right = d * width / height;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();
    });

    init();
    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', onMouseMove); // Elimina l'event listener quan es destrueix el component
    };
  }, [onLoadingProgress]);

  // Actualitza la posició de la càmera quan `moveCamera` canvia
  useEffect(() => {
    if (moveCamera && cameraRef.current) {
      // Mou la càmera més a prop sense recarregar el model
      cameraRef.current.position.set(5, 4, 5);
    }
  }, [moveCamera]);

  return <div ref={mountRef} />;
};

export default Scene;
