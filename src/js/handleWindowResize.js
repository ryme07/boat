import createRenderer from "./createRenderer";
import createCamera from "./createCamera";

export default function handleWindowResize() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const renderer = createRenderer();
  const camera = createCamera();

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
