import * as THREE from "three";
import {
  offsetScale,
  offsetPositionX,
  offsetPositionY,
  offsetPositionZ,
} from "./config";

export const createSquare = (offsetPositions, offsetScale) => {
  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(offsetScale, offsetScale, offsetScale),
    new THREE.MeshBasicMaterial({ color: "blue" })
  );

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(offsetScale, offsetScale, offsetScale),
    new THREE.MeshBasicMaterial({ color: "red" })
  );

  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(offsetScale, offsetScale, offsetScale),
    new THREE.MeshBasicMaterial({ color: "green" })
  );

  const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(offsetScale, offsetScale, offsetScale),
    new THREE.MeshBasicMaterial({ color: "yellow" })
  );

  cube1.position.set(
    offsetPositions.x,
    offsetScale + offsetPositions.y,
    offsetPositions.z
  );
  cube2.position.set(
    offsetScale + offsetPositions.x,
    offsetScale + offsetPositions.y,
    offsetPositions.z
  );
  cube4.position.set(offsetPositions.x, offsetPositions.y, offsetPositions.z);
  cube3.position.set(
    offsetScale + offsetPositions.x,
    offsetPositions.y,
    offsetPositions.z
  );

  return { cube1, cube2, cube3, cube4 };
};

export const { cube1, cube2, cube3, cube4 } = createSquare(
  { x: offsetPositionX, y: offsetPositionY, z: offsetPositionZ },
  offsetScale
);
