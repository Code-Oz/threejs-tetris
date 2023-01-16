import { mergeSequences } from "../utils";
import { labelTetriminosS } from "../config";
import {
  tetriminosSSequence1,
  tetriminosSSequence2,
  tetriminosSSequence3,
} from "./sequence-tetriminos-S";

export const createTetriminosS = (timeline) =>
  mergeSequences(timeline, labelTetriminosS, [
    tetriminosSSequence1,
    tetriminosSSequence2,
    tetriminosSSequence3,
  ]);
