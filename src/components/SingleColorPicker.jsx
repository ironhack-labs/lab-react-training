import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      {color}
      <input
        type="number"
        min={0}
        max={255}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SingleColorPicker;
