const SingleColorPicker = ({ color, value, onChange }) => {
    return (
      <div>
        <label>{color.toUpperCase()}: </label>
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={onChange}
          style={{margin: '0 10px'}}
        />
      </div>
    );
  };
  
  export default SingleColorPicker;