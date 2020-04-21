// Gradiant Sphere with three.js

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.autoClear = false;
document.getElementById('canvas').appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);

// Add sphere

var geometry = new THREE.SphereBufferGeometry(
  3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2
);
var material = new THREE.MeshPhongMaterial({

  color: 0x991aa2,

});
var sphere = new THREE.Mesh(geometry, material);
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add(sphere);

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

// Add floor for shadow
/*
var planeGeometry = new THREE.PlaneBufferGeometry(20, 20, 32, 32);
var planeMaterial = new THREE.MeshStandardMaterial({
  antialias: true,
  alpha: true
})
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
scene.add(plane);
*/
// Light Helper

/*
var helper = new THREE.CameraHelper(lights[0].shadow.camera);
scene.add(helper);
*/
camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.001;
  sphere.rotation.z += 0.001;

  renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}
