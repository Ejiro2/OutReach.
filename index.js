import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

// 3 things THREE js needs for a scene RENDERER , CAMERA AND A SCENE OBJECT

// The camera defines what part of the scene is visible.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// The renderer displays the scene from the perspective of the camera.
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Defines the shape of objects.
const geometry =  new THREE.TorusKnotGeometry(10, 3, 100, 16);


// Defines how the surface of the geometry looks (color, texture, etc.)
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/TCom_Various_AcousticFoam_header4.jpg');
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide, wireframe: false, map: texture });

// Mesh:
// Combines geometry and material.
const TorusKnotGeometry = new THREE.Mesh(geometry, material);
scene.add(TorusKnotGeometry)

// adding lights
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);
const light = new THREE.PointLight(0xff0000, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);
// models the 3d objects

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

        // Responsive Design
        window.addEventListener('resize', function () {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

// animation loop to render scene continously
function animate() {
    requestAnimationFrame(animate);
    TorusKnotGeometry.rotation.x += 0.01;
    TorusKnotGeometry.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
animate();



// import * as THREE from 'three';
// import { OrbitControls } from 'jsm/controls/OrbitControls.js';

// const scene = new THREE.Scene();

// // The camera defines what part of the scene is visible.
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 30; // Adjusted to ensure the object is visible

// // The renderer displays the scene from the perspective of the camera.
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Defines the shape of objects.
// const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// // Defines how the surface of the geometry looks (color, texture, etc.)
// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load('assets/TCom_Various_AcousticFoam_header4.jpg');
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide, wireframe: false, map: texture });

// // Mesh: Combines geometry and material.
// const torusKnot = new THREE.Mesh(geometry, material);
// scene.add(torusKnot);

// // Adding lights
// const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
// scene.add(ambientLight);

// const light = new THREE.PointLight(0xffffff, 1, 100);
// light.position.set(10, 10, 10);
// scene.add(light);

// // Adding controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

// // Responsive Design
// window.addEventListener('resize', function() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     renderer.setSize(width, height);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
// });

// // Animation loop to render the scene continuously
// function animate() {
//     requestAnimationFrame(animate);
//     torusKnot.rotation.x += 0.01;
//     torusKnot.rotation.y += 0.01;
//     controls.update();
//     renderer.render(scene, camera);
// }
// animate();




