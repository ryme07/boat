import * as THREE from "three";
import Colors from "../../utils/colors";

export default class Cloud {
  constructor() {
    this.mesh = new THREE.Object3D();
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshPhongMaterial({
      color: Colors.white,
    });

    let nBlocks = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < nBlocks; i++) {
      let cloud = new THREE.Mesh(geometry, material);

      cloud.position.x = i * 15;
      cloud.position.y = Math.random() * 10;
      cloud.position.z = Math.random() * 10;
      cloud.rotation.z = Math.random() * Math.PI * 2;
      cloud.rotation.y = Math.random() * Math.PI * 2;

      let sizeCloud = 0.1 + Math.random() * 0.9;
      cloud.scale.set(sizeCloud, sizeCloud, sizeCloud);

      cloud.castShadow = true;
      cloud.receiveShadow = true;

      this.mesh.add(cloud);
    }
  }
}
