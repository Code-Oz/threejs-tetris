import { getValueFromParameterNumber } from "./url-parser";

const URL_FLAG_Scale = "scale";
const URL_FLAG_OffsetX = "x";
const URL_FLAG_OffsetY = "y";
const URL_FLAG_OffsetZ = "z";

export const labelTetriminosL = "createTetriminosL";
export const labelTetriminosT = "createTetriminosT";
export const labelTetriminosS = "createTetriminosS";
export const labelTetriminosI = "createTetriminosI";
export const labelTetriminosO = "createTetriminosO";

export const tetriminosL = "tetriminosL";
export const tetriminosT = "tetriminosT";
export const tetriminosS = "tetriminosS";
export const tetriminosI = "tetriminosI";
export const tetriminosO = "tetriminosO";

const defaultSquareSize = 0.5;
const defaultOffsetPositionX = 0;
const defaultOffsetPositionY = 0;
const defaultOffsetPositionZ = 0;

export const offsetScale = getValueFromParameterNumber(
  URL_FLAG_Scale,
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
export const TIME_BETWEEN_FIGURE = 1;

/**
 * Sizes
 */
export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
