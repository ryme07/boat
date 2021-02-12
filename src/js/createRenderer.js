import * as THREE from "three";

export default function createRenderer() {
  const canvas = document.getElementById("app");
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  canvas.appendChild(renderer.domElement);
  return renderer;
}
