const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

export const rgbToHex = (r, g, b) =>
  '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
