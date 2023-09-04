export default function BoxColor({ r, g, b }) {
  function toHex(number) {
    const hex = number.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + toHex(r) + toHex(g) + toHex(b);
  }

  return (
    <div
      className="BoxColor"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      <p>
        rgb({r.toString()}, {g.toString()}, {b.toString()})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}
