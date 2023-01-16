import {
  offsetScale,
  offsetPositionX,
  offsetPositionY,
  quarterTurn,
} from "../config";

import { cube2 } from "../create-square";

export const tetriminosSSequence1 = [
  {
    target: cube2.position,
    value: { y: -offsetScale + offsetPositionY },
  },
  {
    target: cube2.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];

export const tetriminosSSequence2 = [
  {
    target: cube2.position,
    value: { x: offsetScale + offsetPositionX },
  },
  {
    target: cube2.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];

export const tetriminosSSequence3 = [
  {
    target: cube2.position,
    value: { x: offsetPositionX },
  },
  {
    target: cube2.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];
