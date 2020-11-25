import '../style/Dice.css';
import React, { useState } from 'react';

function Dice(props) {
let diceArr = [props.img1, props.img2, props.img3, props.img4, props.img5, props.img6]
  let [dice, setDice] = useState(diceArr[Math.floor(Math.random()*(6-1)+1)])
  function changeDice() {
    console.log("hola")
    setDice(dice = props.img0)
      setTimeout(()=> {
        setDice((dice = diceArr[Math.floor(Math.random() * (6 - 1) + 1)]));
      },1000)
  }
  return (
    <div>
      <span>
        <img onClick={changeDice} src={dice} alt="" />
      </span>
    </div>
  )
}

export default Dice;
