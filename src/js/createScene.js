import * as THREE from "three";

export default function createScene() {
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xffffff);
  scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
  return scene;
}
