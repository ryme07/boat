import * as THREE from "three";

export default function createCube({ color, x, y, z }) {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshLambertMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z, 0);

  return cube;
}
