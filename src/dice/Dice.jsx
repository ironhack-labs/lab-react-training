import React, {useEffect} from 'react';
import './Dice.css';

const Dice = () => {
  const diceArr = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png',
  ];
  
  useEffect(() => {
    // Update the document title using the browser API
    if(count !== 0){
        document.title = `You rolled a ${count}`;

    }
  });
  

  const [state, setState] = React.useState('dice3.png');
const [count, setCount] = React.useState(0)

  const handleChange = () => {
   setState('dice-empty.png')
    setTimeout(() => {
        const random = Math.floor(Math.random() * diceArr.length);
        setCount(random+1)
      setState(diceArr[random]);
    }, 1000);
  };

  return (
    <div className="Dice">
      <img onClick={handleChange} src={state} alt="dice" />
    </div>
  );
};

export default Dice;
