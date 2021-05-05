import Dice from './Dice';
import './Dice.css';

import React from 'react';

export default function DiceSection() {
  return (
    <div>
      <h1>Dice</h1>

      <Dice />
      <Dice />
    </div>
  );
}
