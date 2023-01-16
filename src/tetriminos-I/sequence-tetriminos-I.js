import {
  offsetScale,
  offsetPositionX,
  offsetPositionY,
  quarterTurn,
} from "../config";

import { cube1, cube2 } from "../create-square";

export const tetriminosISequence1 = [
  {
    target: cube1.position,
    value: { x: 2 * offsetScale + offsetPositionX },
  },
  {
    target: cube1.rotation,
    value: { z: `-=${quarterTurn}` },
  },
  {
    target: cube2.position,
    value: { x: -offsetScale + offsetPositionX },
  },
  {
    target: cube2.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];

export const tetriminosISequence2 = [
  {
    target: cube1.position,
    value: { y: offsetPositionY },
  },
  {
    target: cube1.rotation,
    value: { z: `-=${quarterTurn}` },
  },
  {
    target: cube2.position,
    value: { y: offsetPositionY },
  },
  {
    target: cube2.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];
