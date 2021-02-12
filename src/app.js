import "./styles/main.scss";
import animate from "./js/animate";
import createLight from "./js/createLight";
import createRenderer from "./js/createRenderer";
import createCamera from "./js/createCamera";
import createScene from "./js/createScene";
import createSea from "./js/createSea";
import handleWindowResize from "./js/handleWindowResize";

const renderer = createRenderer();
const scene = createScene();
const camera = createCamera();
const sea = createSea();
const hemisphereLght = createLight.hemisphereLight();
const shadowLght = createLight.shadowLight();

scene.add(hemisphereLght);
scene.add(shadowLght);
scene.add(sea);

animate(() => {
  renderer.render(scene, camera);
});

// RESIZE SCENE
window.addEventListener("resize", handleWindowResize, false);
