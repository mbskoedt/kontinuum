"use strict";


var x = window.matchMedia("(max-width: 780px)")
x.addListener(mediaQuery) // Attach listener function on state changes

function mediaQuery(x) {
  if (x.matches) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var cubeSize = 75;
  } else {
    var width = window.innerWidth / 2;
    var height = window.innerHeight;
    var cubeSize = 70;
  }

  // Gradiant Sphere with three.js

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(cubeSize, width / height, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(width, height);
  renderer.autoClear = false;
  document.getElementById('canvas').appendChild(renderer.domElement);
  document.body.appendChild(renderer.domElement);

  // Add sphere

  var geometry = new THREE.SphereGeometry(
    30, 100, 100, 0, Math.PI * 2, 0, Math.PI * 2
  );
  var material = new THREE.MeshPhongMaterial({

    color: 0xc62b2e,

  });
  var sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Add square

  square = new THREE.Object3D();

  var geometry_2 = new THREE.BoxGeometry(45, 45, 45);
  var material_2 = new THREE.MeshPhongMaterial({
    color: 0x991aa2,
    shading: THREE.FlatShading
  });
  var square = new THREE.Mesh()

  for (var i = 0; i < 1; i++) {
    var mesh = new THREE.Mesh(geometry_2, material_2);
    mesh.position.set(Math.random(), Math.random(), Math.random());
    mesh.position.multiplyScalar(0);
    mesh.rotation.set(Math.random(), Math.random(), Math.random());
    square.add(mesh);
    scene.add(square);
  }
  // Add lights

  var ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  var lights = [];
  lights[0] = new THREE.DirectionalLight(0xffffff, 1, 100);
  lights[0].position.set(0, 1, 0);
  lights[0].castShadow = true;
  lights[0].shadow.mapSize.width = 512; // default
  lights[0].shadow.mapSize.height = 512; // default
  lights[0].shadow.camera.near = 0.5; // default
  lights[0].shadow.camera.far = 5; // default

  lights[1] = new THREE.DirectionalLight(0xdd0808, 1);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(0x991aa2, 1);
  lights[2].position.set(-0.75, -1, 0.5);

  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);



  camera.position.z = 140;

  function animate() {
    requestAnimationFrame(animate);

    square.rotation.x += 0.001;
    square.rotation.y -= 0.001;
    square.rotation.z -= 0.002;
    renderer.clear();


    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);

  }
};

mediaQuery(x) // Call listener function at run time
