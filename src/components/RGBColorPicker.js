import React from 'react';
import { useState } from 'react';
import { SingleColorPicker } from './SingleColorPicker';

export const RGBColorPicker = () => {
  const [rValue, setRValue] = useState();
  const [gValue, setGValue] = useState();
  const [bValue, setBValue] = useState();

  return (
    <div>
      RGBColorPicker
      <SingleColorPicker />
      <SingleColorPicker />
      <SingleColorPicker />
    </div>
  );
};
