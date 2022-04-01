import React from 'react';

export const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label for="number">Insert Number: </label>
      <input type="number" min="0" max="255" />
    </div>
  );
};
