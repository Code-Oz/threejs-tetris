import { getValueFromParameterNumber } from "./url-parser";

const URLParamsScale = "scale";
const URL_FLAG_OffsetX = "x";
const URL_FLAG_OffsetY = "y";
const URL_FLAG_OffsetZ = "z";

export const labelTetriminosL = "createTetriminosL";
export const labelTetriminosT = "createTetriminosT";
export const labelTetriminosS = "createTetriminosS";
export const labelTetriminosI = "createTetriminosI";
export const labelTetriminosO = "createTetriminosO";

const defaultSquareSize = 0.5;
const defaultOffsetPositionX = 0;
const defaultOffsetPositionY = 0;
const defaultOffsetPositionZ = 0;

export const offsetScale = getValueFromParameterNumber(
  URLParamsScale,
  defaultSquareSize
);

export const offsetPositionX = getValueFromParameterNumber(
  URL_FLAG_OffsetX,
  defaultOffsetPositionX
);
export const offsetPositionY = getValueFromParameterNumber(
  URL_FLAG_OffsetY,
  defaultOffsetPositionY
);
export const offsetPositionZ = getValueFromParameterNumber(
  URL_FLAG_OffsetZ,
  defaultOffsetPositionZ
);

export const quarterTurn = Math.PI / 2;

export const SEQUENCE_PACE = 1;
export const TIME_BETWEEN_FIGURE = 0;
