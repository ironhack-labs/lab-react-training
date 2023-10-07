/* eslint-disable react/prop-types */
import getTextColorForBg from "../getTextColorForBg";

function rgbColorTo2DigitHec(r, g, b) {
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}

const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      style={{
        backgroundColor: rgbColor,
        borderStyle: "solid",
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <p style={{ color: getTextColorForBg(rgbColor), marginTop: "1rem", marginBottom: 0 }}>
        rgb({r}, {g}, {b})
      </p>
      <p style={{ color: getTextColorForBg(rgbColor)}}>
        {rgbColorTo2DigitHec(r, g, b)}
      </p>
    </div>
  );
};

export default BoxColor;
