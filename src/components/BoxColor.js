export default function BoxColor({ r, g, b }) {
  // These inner functions could be placed in some other place (e.g. utility folder)
  // But, for sake of component independency, it is kept here in place
  const getLightnessOfRGB = (rgbString) => {
    const rgbIntArray = rgbString
      .replace(/ /g, '')
      .slice(4, -1)
      .split(',')
      .map((e) => parseInt(e));

    const highest = Math.max(...rgbIntArray);
    const lowest = Math.min(...rgbIntArray);

    return (highest + lowest) / 2 / 255;
  };

  const rgbToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const convertRGBtoHex = (r, g, b) => {
    return '#' + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
  };

  const rgbColor = `rgb(${r} ${g} ${b})`;
  const lightness = getLightnessOfRGB(rgbColor);
  const fontColor = lightness > 0.5 ? '#000' : '#fff';

  return (
    <div
      className="boxed-border color-box"
      style={{ backgroundColor: rgbColor, color: fontColor }}
    >
      <div>
        rgb({r}, {g}, {b})
      </div>

      <div>{convertRGBtoHex(r, g, b)}</div>
    </div>
  );
}
