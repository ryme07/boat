import * as THREE from "three";

export default function createLight() {
  const light = new THREE.PointLight(0xffffff, 1, 1000);
  light.position.set(0, 0, 10);
  return light;
}
