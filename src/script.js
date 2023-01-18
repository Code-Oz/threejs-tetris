import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import { cube1, cube2, cube3, cube4 } from "./create-square";
import { createTetriminosL } from "./tetriminos-L/tetriminos-L";
import { createTetriminosT } from "./tetriminos-T/tetriminos-T";
import { createTetriminosS } from "./tetriminos-S/tetriminos-S";
import { createTetriminosI } from "./tetriminos-I/tetriminos-I";
import { createTetriminosO } from "./tetriminos-O/tetriminos-O";
import { createDebugGUI } from "./create-debug-ui";
import { updateCurrentTexture } from "./textures";

const cubes = [cube1, cube2, cube3, cube4];

/**
 * Canvas
 */
const canvas = document.querySelector("canvas.webgl");

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Objects
 */
scene.add(cube1, cube2, cube3, cube4);

const timeline = gsap.timeline().pause();

/**
 * Create all timeline
 */
createTetriminosL(timeline);
createTetriminosT(timeline);
createTetriminosS(timeline);
createTetriminosI(timeline);
createTetriminosO(timeline);

timeline
  .play()
  .repeat(-1)
  .eventCallback("onRepeat", () => {
    updateCurrentTexture(cubes);
  });

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * GUI
 */
createDebugGUI(cubes, timeline, scene);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

const tick = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
