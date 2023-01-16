import { mergeSequences } from "../utils";
import { labelTetriminosI } from "../config";
import {
  tetriminosISequence1,
  tetriminosISequence2,
} from "./sequence-tetriminos-I";

export const createTetriminosI = (timeline) =>
  mergeSequences(timeline, labelTetriminosI, [
    tetriminosISequence1,
    tetriminosISequence2,
  ]);
