export const rgbToHex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
export const randomValueGenerate = (arr, seed = 0) => {
  return arr[Math.floor(Math.random() * arr.length + seed)];
};
