import Sea from "./Class/Sea";

export default function createSea() {
  const sea = new Sea();
  sea.mesh.position.y = -1200;
  return sea.mesh;
}
