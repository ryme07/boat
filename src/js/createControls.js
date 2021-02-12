import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function createControls(camera, canvasRender) {
  const controls = new OrbitControls(camera, canvasRender);

  return controls;
}
