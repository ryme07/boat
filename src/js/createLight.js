import * as THREE from "three";

function hemisphereLight() {
  const HemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
  // light.position.set(0, 0, 10);
  return HemisphereLight;
}

function shadowLight() {
  const shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);

  shadowLight.position.set(150, 350, 350);
  shadowLight.castShadow = true;
  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;
  shadowLight.shadow.mapSize.width = 2048;
  shadowLight.shadow.mapSize.height = 2048;

  return shadowLight;
}

export default { hemisphereLight, shadowLight };
