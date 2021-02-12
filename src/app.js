import animate from "./js/animate";
import createLight from "./js/createLight";
import createRenderer from "./js/createRenderer";
import createCamera from "./js/createCamera";
import createCube from "./js/createCube";
import createScene from "./js/createScene";
import createControls from "./js/createControls";
import "./styles/main.scss";

const renderer = createRenderer();
const scene = createScene();
const camera = createCamera();
const controls = createControls(camera, renderer.domElement);

const cubes = {
  pink: createCube({ color: 0xff00ce, x: -1, y: -1, z: 2 }),
  purple: createCube({ color: 0x9300fb, x: 1, y: -1 }),
  blue: createCube({ color: 0x0065d9, x: 1, y: 1, z: -2 }),
  cyan: createCube({ color: 0x00d7d0, x: -1, y: 1 }),
};

const light = createLight();

for (const cube of Object.values(cubes)) {
  scene.add(cube);
}
scene.add(light);

const updateCube = () => {
  cubes.purple.rotation.x += 0.01;
  cubes.cyan.rotation.y += 0.05;
};

const updateControl = () => {
  controls.update();
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
};

animate(() => {
  updateCube();
  updateControl();

  renderer.render(scene, camera);
});

// RESIZE SCENE
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});
