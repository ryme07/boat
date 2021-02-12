import * as THREE from "three";

export default function createRenderer() {
  const canvas = document.getElementById("world");
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  canvas.appendChild(renderer.domElement);
  return renderer;
}
