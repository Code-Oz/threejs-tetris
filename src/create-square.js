import * as THREE from "three";
import {
  offsetScale,
  offsetPositionX,
  offsetPositionY,
  offsetPositionZ,
} from "./config";
import { textureApplyOrder } from "./textures";

const geometry = new THREE.BoxGeometry(offsetScale, offsetScale, offsetScale);
const material = new THREE.MeshToonMaterial({ map: textureApplyOrder[0] });

export const createSquare = (offsetPositions, offsetScale) => {
  const cube1 = new THREE.Mesh(geometry, material);

  const cube2 = new THREE.Mesh(geometry, material);

  const cube3 = new THREE.Mesh(geometry, material);

  const cube4 = new THREE.Mesh(geometry, material);

  cube1.position.set(
    offsetPositions.x,
    offsetScale + offsetPositions.y,
    offsetPositions.z
  );
  cube1.name = "cube1";

  cube2.position.set(
    offsetScale + offsetPositions.x,
    offsetScale + offsetPositions.y,
    offsetPositions.z
  );
  cube2.name = "cube2";

  cube3.position.set(
    offsetScale + offsetPositions.x,
    offsetPositions.y,
    offsetPositions.z
  );
  cube3.name = "cube3";

  cube4.position.set(offsetPositions.x, offsetPositions.y, offsetPositions.z);
  cube4.name = "cube4";

  return { cube1, cube2, cube3, cube4 };
};

export const { cube1, cube2, cube3, cube4 } = createSquare(
  { x: offsetPositionX, y: offsetPositionY, z: offsetPositionZ },
  offsetScale
);
