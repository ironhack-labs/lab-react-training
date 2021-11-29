import styles from './BoxColor.css';

function BoxColor(props) {
  const { r, g, b } = props;
  const toHex = (num) => num.toString(16);
  const boxStyle = {
    ...styles,
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  return (
    <div style={boxStyle} className="box color-box">
      <div>
        rgb({r},{g},{b})
      </div>
      <div>
        #{toHex(r)}
        {toHex(g)}
        {toHex(b)}
      </div>
    </div>
  );
}

export default BoxColor;
