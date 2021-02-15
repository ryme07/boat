import Sky from "./Class/Sky";

export default function createSky() {
  const sky = new Sky();
  sky.mesh.position.y = -400;
  return sky.mesh;
}
