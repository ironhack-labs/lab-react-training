import React from 'react';
import PropTypes from 'prop-types';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div className="single-color-picker">
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        value={value}
        min={0}
        max={255}
        onChange={(event) => onChange(color, parseInt(event.target.value))}
      />
    </div>
  );
};

SingleColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SingleColorPicker;
