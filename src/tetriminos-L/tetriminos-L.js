import { mergeSequences } from "../utils";
import { labelTetriminosL } from "../config";
import {
  tetriminosLSequence1,
  tetriminosLSequence2,
} from "./sequence-tetriminos-L";

export const createTetriminosL = (timeline) =>
  mergeSequences(timeline, labelTetriminosL, [
    tetriminosLSequence1,
    tetriminosLSequence2,
  ]);
