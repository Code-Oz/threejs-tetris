import { offsetScale, offsetPositionX, quarterTurn } from "../config";

import { cube1 } from "../create-square";

export const tetriminosTSequence1 = [
  {
    target: cube1.position,
    value: { x: offsetScale + offsetPositionX },
  },
  {
    target: cube1.rotation,
    value: { z: `-=${quarterTurn}` },
  },
];
