const queryString = window.location.search;
const href = window.location.hash;

const urlParams = new URLSearchParams(queryString);

export const getValueFromParameter = (key, defaultValue) => {
  return urlParams.get(key) ?? defaultValue;
};

export const getValueFromParameterNumber = (key, defaultValue) => {
  return Number(getValueFromParameter(key, defaultValue));
};

export const isHrefExist = (key) => {
  return href === `#${key}`;
};
