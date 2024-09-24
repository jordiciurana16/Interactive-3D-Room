import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AudioLoader, AudioListener, Audio } from 'three';
import Gift from './Gift'; // Importa el component Gift
import Pokeball from './Pokeball'; // Importa el nou component Pokeball


import { gsap } from 'gsap';

const Scene = ({ moveCamera, onLoadingProgress, allowInteraction }) => {
  const mountRef = useRef(null);
  const cameraRef = useRef(); 
  const initialBoxPosition = useRef(null); 
  const initialCoinPosition = useRef(null); 
  const initialRedMushroomPosition = useRef(null); 
  const initialGreenMushroomPosition = useRef(null); 
  const [showGift, setShowGift] = useState(false); // Estat per controlar la visualització del component Gift
  const [showPokeball, setShowPokeball] = useState(false); // Estat per controlar la visualització de Pokeball
  const pokeballRef = useRef(); // Ref per a l'objecte pokeball





  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const d = 7.5;

    const camera = new THREE.OrthographicCamera(  -d * aspect, d * aspect, d, -d, 0.1, 3000 // Redueix el 'near' i augmenta el 'far'
    );
    
    camera.position.set(3, 2, 3);
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

      pokeball = gltf.scene.getObjectByName('pokeball'); // Inicialitza l'objecte "pokeball"
      pokeballRef.current = pokeball; // Emmagatzema la referència
      if (pokeball) {
        pokeball.visible = false; // Manté la Pokeball invisible inicialment
        const pokeballHitbox = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1), // Ajusta les dimensions segons sigui necessari
          new THREE.MeshBasicMaterial({ visible: false }) // Material invisible
        );
        pokeballHitbox.position.copy(pokeball.position);
        pokeballHitbox.scale.set(1.2, 1.2, 1.2); // Ajusta l'escala segons sigui necessari
        scene.add(pokeballHitbox);
        pokeballRef.current.hitbox = pokeballHitbox;


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
    controls.screenSpacePanning = false; // Desactiva el pan amb el botó dret del ratolí
    controls.enablePan = false; // Desactiva el moviment de pan (desplaçament)
    controls.enableZoom = true; // Permet el zoom
    controls.enableRotate = true; // Permet la rotació
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
    const soundPokeball = new THREE.Audio(listener); // Afegim el so del vinil
    const soundVinyl = new THREE.Audio(listener); // Afegim el so del vinil
    const soundGift = new THREE.Audio(listener); // Afegim el so del vini
    

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
      if (!allowInteraction) return; // Impedeix la interacció si no es permet

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects([movieCounter, paintingCounter, headCounter, boxCounter, musicCounter, giftCounter, pokeballRef.current.hitbox, // Utilitza la hitbox per la Pokeball
        // Afegim la Pokeball explícitament aquí
      ].filter(Boolean), true);

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
      if (!allowInteraction) return; // Impedeix la interacció si no es permet

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

        // Comprova si l'objecte seleccionat és la Pokeball
        if (selectedObject === pokeballRef.current.hitbox) {
          console.log('Clic detectat a pokeball');
          loader.load('/Interactive-3D-Room/model/teddiursa.glb', (gltf) => {
      const teddiursa = gltf.scene;
      teddiursa.scale.set(1, 1, 1); // Ajusta l'escala segons sigui necessari
      teddiursa.position.set(-0.7, 1.71, -0.7); // Ajusta la posició segons sigui necessari
      function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
        
      }

      teddiursa.rotation.x = degreesToRadians(-70); // Rotació de 90 graus en l'eix X
      teddiursa.rotation.z = degreesToRadians(85); // Rotació de 90 graus en l'eix X
  
      scene.add(teddiursa); // Afegeix Teddiursa a l'escena
      console.log('Model Teddiursa carregat correctament!');
    }, undefined, function (error) {
      console.error('Error carregant el model Teddiursa:', error);
    });

    
          // Oculta la Pokeball i elimina la hitbox
          setShowPokeball(false);
          pokeball.visible = false;
          scene.remove(pokeballRef.current.hitbox); // Elimina la hitbox de l'escena
          console.log('Reproduint so Pokeball');
          soundPokeball.play(); // Reprodueix el so
        }

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

    const animateRotation = () => {
      // Defineix els angles en radians
      const minRotation = THREE.MathUtils.degToRad(-20); // -20 graus en radians
      const maxRotation = THREE.MathUtils.degToRad(20); // 20 graus en radians
    
      // Animació cíclica amb GSAP
      gsap.to(scene.rotation, {
        y: maxRotation, // Rota fins a 20 graus
        duration: 15, // Augmenta la durada per fer-ho més lent
        ease: "power1.inOut",
        yoyo: true, // Torna enrere després de completar
        repeat: -1, // Repetir infinitament
      });
    };
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
    animateRotation();


    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', onMouseMove);
    };
    if (allowInteraction) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('click', onMouseClick);
      window.addEventListener('touchstart', onMouseClick);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onMouseClick);
      window.removeEventListener('touchstart', onMouseClick);
    };
  }, [allowInteraction, onLoadingProgress]);

  useEffect(() => {
    if (moveCamera && cameraRef.current) {
      cameraRef.current.position.set(5, 4, 5);
    }
  }, [moveCamera]);

  const handleShowAndHidePokeball = () => {
    setShowPokeball(false); // Oculta el component de Pokeball

    if (pokeballRef.current) {
      pokeballRef.current.visible = true; // Mostra l'objecte Pokeball de Three.js
      animatePokeballFall(); // Crida a la funció per animar la caiguda de la Pokeball
    }
  };
   const animatePokeballFall = () => {
    const pokeball = pokeballRef.current;
    if (!pokeball) return;

    // Comença amb la Pokeball a y+4
    pokeball.position.y = 5;

    // Anima la caiguda i el rebot amb GSAP
    gsap.to(pokeball.position, {
      y: 1.7, // Posició final a y=0 (a terra)
      duration: 1.3 , // Durada de la caiguda
      ease: 'bounce.out', // Efecte de rebot al tocar el terra
    });
    
  };

  const handleOpenGift = () => {
    setShowGift(false);
    setShowPokeball(true);
  };
  
 // Funció per fer visible la Pokeball dins de Scene.jsx
 const handleShowPokeball = () => {
  setShowPokeball(true); // Canvia l'estat per mostrar el component Pokeball
  if (pokeballRef.current) {
    pokeballRef.current.visible = true; // Fa visible l'objecte Pokeball dins de l'escena
  }
};

// Funció per ocultar la Pokeball dins de Scene.jsx
const handleHidePokeball = () => {
  setShowPokeball(false); // Oculta el component Pokeball
  if (pokeballRef.current) {
    pokeballRef.current.visible = false; // Oculta la Pokeball a l'escena

  }
};


return (
  <div ref={mountRef} className="canvas-container">
    {showGift && <Gift onOpenGift={handleOpenGift} />}
    {showPokeball && (
      <Pokeball
        onShowPokeball={handleShowAndHidePokeball} // Utilitza la nova funció per mostrar la Pokeball i ocultar el component
        onHidePokeball={handleShowAndHidePokeball} // Reutilitza la mateixa funció per l'event de clic
      />
    )}
  </div>
);
};

export default Scene;