import { mergeSequences } from "../utils";
import { labelTetriminosO } from "../config";
import {
  tetriminosOSequence1,
  tetriminosOSequence2,
  tetriminosOSequence3,
  tetriminosOSequence4,
  tetriminosOSequence5,
} from "./sequence-tetriminos-O";

export const createTetriminosO = (timeline) =>
  mergeSequences(timeline, labelTetriminosO, [
    tetriminosOSequence1,
    tetriminosOSequence2,
    tetriminosOSequence3,
    tetriminosOSequence4,
    tetriminosOSequence5,
  ]);
