import React from 'react';
import './Dice.css';

async function handleRollDice(setState) {
  const randomDice = Math.floor(Math.random() * 6 + 1);
  setState({ string: '-empty', clickable: false });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ string: randomDice, clickable: true });
    }, 1000);
  });
}

const Dice = () => {
  const [state, setState] = React.useState({
    string: '-empty',
    clickable: true,
  });

  return (
    <div className="dice-container">
      <img
        src={`img/dice${state.string}.png`}
        alt="dice"
        onClick={async () => {
          state.clickable && setState(await handleRollDice(setState));
        }}
      />
    </div>
  );
};

export default Dice;
