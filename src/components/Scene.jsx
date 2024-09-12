import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AudioLoader, AudioListener, Audio } from 'three';
import Gift from './Gift'; // Importa el component Gift
import Pokeball from './Pokeball'; // Importa el nou component Pokeball


import { gsap } from 'gsap';

const Scene = ({ moveCamera, onLoadingProgress }) => {
  const mountRef = useRef(null);
  const cameraRef = useRef(); 
  const pokeballRef = useRef(null); // Referència per al objecte pokeball

  const initialBoxPosition = useRef(null); 
  const initialCoinPosition = useRef(null); 
  const initialRedMushroomPosition = useRef(null); 
  const initialGreenMushroomPosition = useRef(null); 
  const [showGift, setShowGift] = useState(false); // Estat per controlar la visualització del component Gift
  const [showPokeball, setShowPokeball] = useState(false); // Estat per controlar la visualització de Pokeball




  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const d = 7.5;

    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
    camera.position.set(5, 2, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    cameraRef.current = camera; 

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    currentMount.appendChild(renderer.domElement);

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
    let boxCounter, misteryBox, coin, redMushrooms, greenMushrooms; 
    let musicCounter, vinyl; // Definim els nous objectes
    let gift, giftCounter;
    let pokeball;

    loader.manager.onProgress = function (item, loaded, total) {
      const progress = (loaded / total) * 100;
      onLoadingProgress(progress);
    };

    loader.load('/Interactive-3D-Room/model/room.glb', function (gltf) {
      scene.add(gltf.scene);

      movieCounter = gltf.scene.getObjectByName('movieCounter');
      fantasticMrFox = gltf.scene.getObjectByName('fantasticMrFox');
      eStataLaManoDiDio = gltf.scene.getObjectByName('eStataLaManoDiDio');
      theTrumanShow = gltf.scene.getObjectByName('theTrumanShow');
      forrestGump = gltf.scene.getObjectByName('forrestGump');
      boxCounter = gltf.scene.getObjectByName('boxCounter');
      misteryBox = gltf.scene.getObjectByName('box');
      coin = gltf.scene.getObjectByName('coin');

      gift = gltf.scene.getObjectByName('gift');
      giftCounter = gltf.scene.getObjectByName('giftCounter');

      pokeball = gltf.scene.getObjectByName('pokeball');
      if (pokeball) {
        pokeball.visible = false; // Inicialitza com invisible
        pokeballRef.current = pokeball; // Assigna la referència
      }

    



      paintingCounter = gltf.scene.getObjectByName('paintingCounter');
      greatWave = gltf.scene.getObjectByName('greatWave');
      persistenceMemory = gltf.scene.getObjectByName('persistenceMemory');
      theScream = gltf.scene.getObjectByName('theScream');
      venusBirth = gltf.scene.getObjectByName('venusBirth');

      headCounter = gltf.scene.getObjectByName('headCounter');
      creeperHead = gltf.scene.getObjectByName('creeper');
      enderHead = gltf.scene.getObjectByName('ender');
      skeletonHead = gltf.scene.getObjectByName('skeleton');

      redMushrooms = gltf.scene.getObjectByName('redMushroom');
      greenMushrooms = gltf.scene.getObjectByName('greenMushroom');

      musicCounter = gltf.scene.getObjectByName('musicCounter'); // Carreguem el nou objecte
      vinyl = gltf.scene.getObjectByName('vinyl'); // Carreguem l'objecte vinyl

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

      if (giftCounter) giftCounter.visible = false;

      if (headCounter) headCounter.visible = false;
      if (creeperHead) creeperHead.visible = true;
      if (enderHead) enderHead.visible = false;
      if (skeletonHead) skeletonHead.visible = false;

      if (boxCounter) boxCounter.visible = false;
      if (musicCounter) musicCounter.visible = false;




      if (coin) {
        coin.visible = false;
        initialCoinPosition.current = coin.position.clone();
      }

      if (misteryBox) initialBoxPosition.current = misteryBox.position.clone();

      if (redMushrooms) {
        redMushrooms.visible = false;
        initialRedMushroomPosition.current = redMushrooms.position.clone();
      }
      
      if (greenMushrooms) {
        greenMushrooms.visible = false;
        initialGreenMushroomPosition.current = greenMushrooms.position.clone();
      }

      if (vinyl) vinyl.visible = true; // Inicialitzem el vinil com a visible

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
    let boxCounterState = 0;
    let musicClickState = 0; // Estat per al musicCounter
    let giftCounterState = 0;

    const listener = new THREE.AudioListener();
    camera.add(listener);

    const soundCreeper = new THREE.Audio(listener);
    const soundEnder = new THREE.Audio(listener);
    const soundSkeleton = new THREE.Audio(listener);
    const soundCoin = new THREE.Audio(listener);
    const soundRedMushroom = new THREE.Audio(listener);
    const soundGreenMushroom = new THREE.Audio(listener);
    const soundVinyl = new THREE.Audio(listener); // Afegim el so del vinil
    const soundGift = new THREE.Audio(listener); // Afegim el so del vinil
    const soundPokeball = new THREE.Audio(listener); // Afegim el so del vinil



    const audioLoader = new THREE.AudioLoader();

    

    function loadSounds() {
      audioLoader.load('/Interactive-3D-Room/model/assets/sound/creeper.mp3', function (buffer) {
        soundCreeper.setBuffer(buffer);
        soundCreeper.setLoop(false);
        soundCreeper.setVolume(0.3);
      });

      audioLoader.load('/Interactive-3D-Room/model/assets/sound/ender.mp3', function (buffer) {
        soundEnder.setBuffer(buffer);
        soundEnder.setLoop(false);
        soundEnder.setVolume(0.3);
      });

      audioLoader.load('/Interactive-3D-Room/model/assets/sound/skeleton.mp3', function (buffer) {
        soundSkeleton.setBuffer(buffer);
        soundSkeleton.setLoop(false);
        soundSkeleton.setVolume(0.3);
      });
      audioLoader.load('/Interactive-3D-Room/model/assets/sound/coin.ogg', function (buffer) {
        soundCoin.setBuffer(buffer);
        soundCoin.setLoop(false);
        soundCoin.setVolume(0.3);
      });
      audioLoader.load('/Interactive-3D-Room/model/assets/sound/redMushroom.mp3', function (buffer) {
        soundRedMushroom.setBuffer(buffer);
        soundRedMushroom.setLoop(false);
        soundRedMushroom.setVolume(0.3);
      });
      audioLoader.load('/Interactive-3D-Room/model/assets/sound/greenMushroom.mp3', function (buffer) {
        soundGreenMushroom.setBuffer(buffer);
        soundGreenMushroom.setLoop(false);
        soundGreenMushroom.setVolume(0.3);
      });
      audioLoader.load('/Interactive-3D-Room/model/assets/sound/vinyl.mp3', function (buffer) { // Carreguem el so del vinil
        soundVinyl.setBuffer(buffer);
        soundVinyl.setLoop(true); // Activem el loop per al vinil
        soundVinyl.setVolume(0.5);
      });
      audioLoader.load('/Interactive-3D-Room/model/assets/sound/gift.mp3', function (buffer) { // Carreguem el so del vinil
        soundGift.setBuffer(buffer);
        soundGift.setLoop(false); // Activem el loop per al vinil
        soundGift.setVolume(0.5);
      });
      audioLoader.load('/Interactive-3D-Room/model/assets/sound/pokeball.mp3', function (buffer) { // Carreguem el so del vinil
        soundPokeball.setBuffer(buffer);
        soundPokeball.setLoop(false); // Activem el loop per al vinil
        soundPokeball.setVolume(0.5);
      });
    }

    function getNormalizedBounceHeight(object) {
      const bounceHeight = 2.5;
      const distance = camera.position.distanceTo(object.position);
      return bounceHeight / distance;
    }

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects([movieCounter, paintingCounter, headCounter, boxCounter, musicCounter, giftCounter].filter(Boolean), true);

      if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = 'default';
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    function switchToDayScene() {
      directionalLight.intensity = 1;
      ambientLight.intensity = 0.4;
    }

    function switchToNightScene() {
      directionalLight.intensity = 0.1;
      ambientLight.intensity = 0.1;
    }

    function animateMushroom(mushroom, initialPosition) {
      if (!mushroom) return;
    
      const velocity = 4; 
    
      const timeline = gsap.timeline({
        onComplete: () => {
          mushroom.position.copy(initialPosition); 
          mushroom.visible = false; 
        }
      });
    
      function calculateDuration(distance) {
        return distance / velocity; 
      }
    
      timeline.to(mushroom.position, { 
        y: "+=0.5", 
        duration: calculateDuration(0.8), 
        ease: "power2.out" 
      })
      .to(mushroom.position, { 
        x: "+=0.8",
        duration: calculateDuration(0.8), 
        ease: "linear" 
      })
      .to(mushroom.position, { 
        y: "-=2.9", 
        duration: calculateDuration(2.9), 
        ease: "linear" 
      })
      .to(mushroom.position, { 
        x: "+=1.2",
        duration: calculateDuration(1.2), 
        ease: "linear" 
      })
      .to(mushroom.position, { 
        z: "+=1.4",
        duration: calculateDuration(1.4), 
        ease: "linear" 
      })
      .to(mushroom.position, { 
        y: "-=1.05",
        duration: calculateDuration(1.05), 
        ease: "linear" 
      })
      .to(mushroom.position, { 
        z: "+=3.2",
        duration: calculateDuration(3.2), 
        ease: "linear" 
      })
      .to(mushroom.position, { 
        y: "-=10",
        duration: calculateDuration(10), 
        ease: "linear" 
      });
      timeline.play();

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

        if (selectedObject.name === 'giftCounter') {
          console.log('Clic detectat a giftCounter');
        
          // Incrementa el comptador de clics
          giftCounterState++;
        
          // Si es el primer clic, mostra el regal i reprodueix el so
          if (gift && giftCounterState === 1) {
            const initialPosition = gift.position.clone(); // Guardar la posició inicial
            const initialRotation = gift.rotation.clone(); // Guardar la rotació inicial
        
            const timeline = gsap.timeline(); // Crear una línia de temps amb gsap
            soundGift.play(); // Reprodueix el so del regal

        
            // Animació de salt en l'eix Y
            timeline.to(gift.position, {
              y: initialPosition.y + 0.5, // Salt de 1 unitat en l'eix Y
              duration: 0.2,
              ease: "power1.out"
            })
            // Animació de rotació controlada en l'eix Z quan està a la part superior
            .to(gift.rotation, {
              x: initialRotation.x - 1, // Rotació de -0.5 radians en l'eix Z
              duration: 0.2,
              ease: "power1.inOut"
            })
            .to(gift.rotation, {
              x: initialRotation.x + 0.5, // Rotació de 0.5 radians en l'eix Z
              duration: 0.2,
              ease: "power1.inOut"
            })
            .to(gift.rotation, {
              x: initialRotation.x, // Tornar a la rotació inicial en l'eix Z
              duration: 0.2,
              ease: "power1.inOut"
            })
            // Tornar a la posició original
            .to(gift.position, {
              y: initialPosition.y, // Tornar a la posició original
              duration: 0.5,
              ease: "bounce.out"
            });
        
            timeline.eventCallback("onComplete", () => {
              setShowGift(true); // Mostra el component Gift quan l'animació finalitza
              gift.visible = false; // Oculta el regal després de l'animació
            });
        
          } else if (giftCounterState === 2) {
            // Si es el segon clic, reprodueix l'àudio de la Pokeball
            soundPokeball.play()
          }
        }     
        if (selectedObject.name === 'boxCounter') {
          console.log('Clic detectat a boxCounter');

          boxCounterState = (boxCounterState + 1) % 11;

          if (boxCounterState === 4 && redMushrooms) {
            redMushrooms.visible = true;
            soundRedMushroom.play();
            animateMushroom(redMushrooms, initialRedMushroomPosition.current);

          } else if (boxCounterState === 10 && greenMushrooms) {
            greenMushrooms.visible = true;
            soundGreenMushroom.play();
            animateMushroom(greenMushrooms, initialGreenMushroomPosition.current);

            boxCounterState = 0;
          } else {
            gsap.killTweensOf(misteryBox.position);
            misteryBox.position.copy(initialBoxPosition.current);

            const normalizedHeight = getNormalizedBounceHeight(misteryBox);
            gsap.to(misteryBox.position, {
              y: initialBoxPosition.current.y + normalizedHeight,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
              onComplete: () => {
                misteryBox.position.copy(initialBoxPosition.current);
              },
            });

            if (coin && misteryBox.position.y === initialBoxPosition.current.y) {
              coin.visible = true;
              gsap.to(coin.position, {
                y: initialCoinPosition.current.y + 2,
                duration: 0.5,
                onStart: () => soundCoin.play(),
                onComplete: () => {
                  coin.visible = false;
                  coin.position.copy(initialCoinPosition.current);
                },
              });
              gsap.to(coin.rotation, {
                y: "+=720",
                duration: 0.5,
                ease: "power1.inOut",
              });
            }
          }
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

        if (selectedObject.name === 'musicCounter') { 
          console.log('Clic detectat a musicCounter');
        
          if (soundVinyl.isPlaying) {
            soundVinyl.pause(); // Pausa la reproducció si el so està sonant
          } else {
            soundVinyl.play(); // Reprodueix o reanuda el so si no està sonant
          }
        
          console.log('Estat del vinil:', soundVinyl.isPlaying ? 'Reproduint' : 'Pausat');
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
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onLoadingProgress]);

  useEffect(() => {
    if (moveCamera && cameraRef.current) {
      cameraRef.current.position.set(5, 4, 5);
    }
  }, [moveCamera]);

  const handleOpenGift = () => {
    setShowGift(false); // Canvia l'estat per mostrar Pokeball en lloc de Gift
    setShowPokeball(true); 

  };

  function animatePokeball() {
    if (!pokeballRef.current) return;

    const initialPosition = new THREE.Vector3(2, 5, 2); // Posició inicial elevada
    const targetPosition = new THREE.Vector3(2, 0.67, 2); // Posició de destí al terra
    const reboundHeight = initialPosition.y * 0.25; // Alçada del rebot
    const durationFall = 1.5; // Durada de la caiguda
    const durationRebound = 0.75; // Durada del rebot

    pokeballRef.current.position.copy(initialPosition);

    const timeline = gsap.timeline();

    // Animació de caiguda parabòlica
    timeline.to(pokeballRef.current.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: durationFall,
      ease: 'power2.in',
      onComplete: () => {
        // Animació de rebot
        timeline.to(pokeballRef.current.position, {
          y: reboundHeight,
          duration: durationRebound,
          ease: 'power2.out',
        })
        .to(pokeballRef.current.position, {
          y: targetPosition.y,
          duration: durationRebound,
          ease: 'power2.in',
        });
      }
    });
  }


  const handleShowPokeball = () => {
    if (pokeballRef.current) {
      pokeballRef.current.visible = true; // Fes visible la pokeball
      animatePokeball(); // Crida l'animació quan la Pokeball es fa visible

    }
  };

  const handleHidePokeball = () => {
    setShowPokeball(false); // Actualitza l'estat per deixar de mostrar el component Pokeball
  };
  

  return (
    <div ref={mountRef} className="canvas-container">
      {showGift && <Gift onOpenGift={handleOpenGift} />}
      {showPokeball && <Pokeball onShowPokeball={handleShowPokeball} onHidePokeball={handleHidePokeball} />} 
      </div>
  );
};

export default Scene;
