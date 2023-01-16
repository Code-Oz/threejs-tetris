import { SEQUENCE_PACE, TIME_BETWEEN_FIGURE } from "./config";
const startAfterLabelTime = (label, timeSecond) => `${label}+=${timeSecond}`;

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
