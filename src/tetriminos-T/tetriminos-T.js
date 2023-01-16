import { mergeSequences } from "../utils";
import { labelTetriminosT } from "../config";
import { tetriminosTSequence1 } from "./sequence-tetriminos-T";

export const createTetriminosT = (timeline) =>
  mergeSequences(timeline, labelTetriminosT, [tetriminosTSequence1]);
