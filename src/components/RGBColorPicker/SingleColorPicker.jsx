import ColorSquare from './ColorSquare';

const SingleColorPicker = ({ value, onChange, color, name, squareColor }) => {
  const commonProps = {
    value,
    onChange,
    color,
    name,
  };

  return (
    <div className="SingleColorPicker">
      <ColorSquare squareColor={squareColor} />
      <label>{color.toUpperCase()}:</label>
      <input type="number" min={0} max={255} {...commonProps} />
    </div>
  );
};

export default SingleColorPicker;
