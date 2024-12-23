// Path: src/utils.js
export const capitalizeString = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};