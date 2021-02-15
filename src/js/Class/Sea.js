import * as THREE from "three";
import Colors from "../../utils/colors";

export default class Sea {
  constructor() {
    let geometry = new THREE.CylinderBufferGeometry(1200, 1200, 800, 40, 10);

    geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

    let material = new THREE.MeshPhongMaterial({
      color: Colors.blue,
      transparent: true,
      opacity: 0.6,
      flatShading: THREE.FlatShading,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.receiveShadow = true;
  }
}
