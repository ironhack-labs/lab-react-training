import classes from './SingleColorPicker.module.css';

const SingleColorPicker = (props) => {
  const color = props.color;
  const changeInputHandler = ({ target }) => {
    props.onChange(target.value, color);
  };
  const r = props.color === 'r' ? props.value : 0;
  const g = props.color === 'g' ? props.value : 0;
  const b = props.color === 'b' ? props.value : 0;
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <div className={classes.colorContainer}>
      <h2>{color}</h2>
      <div
        className={classes.colorSquare}
        style={{ backgroundColor: bgColor }}
      ></div>
      <input
        type="number"
        name="colorInput"
        id="colorInput"
        className={classes.colorInput}
        onChange={changeInputHandler}
        min="0"
        max="255"
        value={props.value}
      />
    </div>
  );
};

export default SingleColorPicker;
