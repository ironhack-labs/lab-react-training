import React from 'react';

export default function Dice() {
  const [state, setState] = React.useState(0);
  function randomdice() {
    let randomNumber = Math.round(Math.random() * (6 - 1) + 1);
  }
}
