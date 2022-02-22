import './Dice.css';
import React from 'react';

function Dice (){
const [diceToggle,setDiceToggle]=React.useState(true)
const diceImg = `/dice${diceToggle}.png`
function getRandomDice(){
return  Math.floor(Math.random()*6)+1
}
const diceClick=()=>{
   const randomDice =getRandomDice()//me da el valor entre 1 y 6 
   setTimeout(()=>{
       setDiceToggle(randomDice)},100)//el tiempo es de 1 segundo 
}
return(
    <>
    <img src= {diceImg} alt='Dado vacio' onClick={diceClick}/>
    </>
)
}

export default Dice
//no se genera la imagen...¿?