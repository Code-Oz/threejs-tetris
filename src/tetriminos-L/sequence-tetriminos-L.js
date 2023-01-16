import {
  offsetScale,
  offsetPositionX,
  offsetPositionY,
  quarterTurn,
} from "../config";

import { cube2 } from "../create-square";

export const tetriminosLSequence1 = [
  {
    target: cube2.position,
    value: { x: 2 * offsetScale + offsetPositionX },
  },
  {
    target: cube2.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];

export const tetriminosLSequence2 = [
  {
    target: cube2.position,
    value: { y: offsetPositionY },
  },
  {
    target: cube2.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];
