import {
  SEQUENCE_PACE,
  TIME_BETWEEN_FIGURE,
  tetriminosL,
  tetriminosT,
  tetriminosS,
  tetriminosI,
  tetriminosO,
  labelTetriminosL,
  labelTetriminosT,
  labelTetriminosS,
  labelTetriminosI,
  labelTetriminosO,
} from "./config";

const startAfterLabelTime = (label, timeSecond) => `${label}+=${timeSecond}`;

export const getValueFromArrayInfinity = (array) => {
  let index = 0;

  return () => {
    index + 1 >= array.length ? (index = 0) : index++;
    return array[index];
  };
};

export const mergeSequences = (timeline, label, sequences) => {
  timeline.add(label, `+=${TIME_BETWEEN_FIGURE}`);
  return sequences.map((sequences, index) => {
    const startTime = index * SEQUENCE_PACE;
    const labelWithStartTime = startAfterLabelTime(label, startTime);

    // sequence that will run together, like rotating and transform
    sequences.forEach((sequence) => {
      timeline.to(sequence.target, sequence.value, labelWithStartTime);
    });
  });
};

export const tetriminosMapping = {
  [tetriminosO]: labelTetriminosL,
  [tetriminosL]: labelTetriminosT,
  [tetriminosT]: labelTetriminosS,
  [tetriminosS]: labelTetriminosI,
  [tetriminosI]: labelTetriminosO,

  [labelTetriminosL]: tetriminosO,
  [labelTetriminosT]: tetriminosL,
  [labelTetriminosS]: tetriminosT,
  [labelTetriminosI]: tetriminosS,
  [labelTetriminosO]: tetriminosI,
};
