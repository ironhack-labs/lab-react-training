import classes from './BoxColor.module.css';

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColor = (props) => {
  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  };

  const hexColor = rgbToHex(props.r, props.g, props.b);

  return (
    <div style={divStyle} className={classes.boxColor}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{hexColor}</p>
    </div>
  );
};

export default BoxColor;
