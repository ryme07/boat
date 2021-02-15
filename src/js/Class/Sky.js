import * as THREE from "three";
import Cloud from "./Cloud";

export default class Sky {
  constructor() {
    this.mesh = new THREE.Object3D();

    this.nbClouds = 20;
    let stepAngle = (Math.PI * 2) / this.nbClouds;

    for (let i = 0; i < this.nbClouds; i++) {
      let cloud = new Cloud();

      let angle = stepAngle * i;
      let height = 750 + Math.random() * 200;

      cloud.mesh.position.y = Math.sin(angle) * height;
      cloud.mesh.position.x = Math.cos(angle) * height;

      cloud.mesh.rotation.z = angle + Math.PI / 2;

      cloud.mesh.position.z = -400 - Math.random() * 400;

      let setSizeCloud = 1 + Math.random() * 2;
      cloud.mesh.scale.set(setSizeCloud, setSizeCloud, setSizeCloud);

      this.mesh.add(cloud.mesh);
    }
  }
}
