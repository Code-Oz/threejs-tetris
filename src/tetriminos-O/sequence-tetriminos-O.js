import {
  offsetScale,
  offsetPositionX,
  offsetPositionY,
  quarterTurn,
  offsetPositionZ,
} from "../config";

import { cube1, cube2 } from "../create-square";

export const tetriminosOSequence1 = [
  {
    target: cube1.position,
    value: { z: -offsetScale + offsetPositionZ },
  },
  {
    target: cube1.rotation,
    value: { y: `+=${quarterTurn}` },
  },
  {
    target: cube2.position,
    value: { z: offsetScale + offsetPositionZ },
  },
  {
    target: cube2.rotation,
    value: { y: `+=${quarterTurn}` },
  },
];

export const tetriminosOSequence2 = [
  {
    target: cube1.position,
    value: { x: offsetScale + offsetPositionX },
  },
  {
    target: cube1.rotation,
    value: { y: `+=${quarterTurn}` },
  },
  {
    target: cube2.position,
    value: { x: offsetPositionX },
  },
  {
    target: cube2.rotation,
    value: { y: `+=${quarterTurn}` },
  },
];

export const tetriminosOSequence3 = [
  {
    target: cube1.position,
    value: { x: offsetPositionX },
  },
  {
    target: cube1.rotation,
    value: { y: `+=${quarterTurn}` },
  },
  {
    target: cube2.position,
    value: { x: offsetScale + offsetPositionX },
  },
  {
    target: cube2.rotation,
    value: { y: `+=${quarterTurn}` },
  },
];

export const tetriminosOSequence4 = [
  {
    target: cube1.position,
    value: { y: offsetScale + offsetPositionY },
  },
  {
    target: cube1.rotation,
    value: { x: `+=${quarterTurn}` },
  },
  {
    target: cube2.position,
    value: { y: offsetScale + offsetPositionY },
  },
  {
    target: cube2.rotation,
    value: { x: `-=${quarterTurn}` },
  },
];

export const tetriminosOSequence5 = [
  {
    target: cube1.position,
    value: { z: offsetPositionZ },
  },
  {
    target: cube1.rotation,
    value: { x: `+=${quarterTurn}` },
  },
  {
    target: cube2.position,
    value: { z: offsetPositionZ },
  },
  {
    target: cube2.rotation,
    value: { x: `-=${quarterTurn}` },
  },
];
