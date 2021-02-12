import * as THREE from "three";

export default function createCamera() {
  const fieldOfView = 60;
  const nearView = 1;
  const farView = 10000;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearView,
    farView
  );
  //POSITION
  camera.position.x = 0;
  camera.position.z = 200;
  camera.position.y = 100;
  return camera;
}
