import Sea from "./Sea";

export default function createSea() {
  const sea = new Sea();
  sea.mesh.position.y = -600;
  return sea.mesh;
}
