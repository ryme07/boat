import "./styles/main.scss";
import animate from "./js/animate";
import createLight from "./js/createLight";
import createRenderer from "./js/createRenderer";
import createCamera from "./js/createCamera";
import createScene from "./js/createScene";
import createSea from "./js/createSea";
import createSky from "./js/createSky";

const renderer = createRenderer();
const scene = createScene();
const camera = createCamera();
const sea = createSea();
const sky = createSky();
const hemisphereLght = createLight.hemisphereLight();
const shadowLght = createLight.shadowLight();

scene.add(hemisphereLght);
scene.add(shadowLght);
scene.add(sea);
scene.add(sky);

animate(() => {
  sea.rotation.z += 0.001;
  sky.rotation.z += 0.001;
  renderer.render(scene, camera);
});

// RESIZE SCENE
window.addEventListener("resize", handleWindowResize, false);

function handleWindowResize() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
