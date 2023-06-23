import React from 'react';

function SingleColorPicker(props) {
  const { color, value, onChange } = props;

  return (
    <div>
      <label>
        {color.toUpperCase()}
        <input
          type="number"
          value={value}
          onChange={(event) => {
            onChange(Number(event.target.value));
          }}
        />
      </label>
    </div>
  );
}

export default SingleColorPicker;
