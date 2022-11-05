import { useState } from 'react';

function importAll(dices) {
  let images = {};
  dices.keys().forEach((item) => {
    images[item.replace('./', '')] = dices(item);
  });
  return images;
}

const images = importAll(require.context('../assets/images', false, /dice/));
const diceArray = Object.values(images);

function Dice() {
  const randomDice = () => {
    return diceArray[Math.floor(Math.random() * 6) + 1];
  };

  const [dice, setDice] = useState(randomDice);
  const handleClick = () => {
    setDice(diceArray[0]);
    setTimeout(() => {
      setDice(randomDice);
    }, 1000);
  };

  return (
    <div>
      <img
        style={{ width: '100px' }}
        onClick={handleClick}
        src={dice}
        alt="img"
      />
    </div>
  );
}
export default Dice;
