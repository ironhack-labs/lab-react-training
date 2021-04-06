import React, { useState } from 'react';

export default function DiceHook() {
  const randomValue = () => Math.floor(Math.random() * 6 + 1);

  const [value, setValue] = useState(randomValue());

  const handleChangeValue = () => {
    setValue('-empty');
    setTimeout(() => setValue(randomValue()), 1000);
  };

  return (
    <div onClick={handleChangeValue} className="Dice__dice">
      <img src={'./img/dice' + value + '.png'} alt="dice" />
    </div>
  );
}
