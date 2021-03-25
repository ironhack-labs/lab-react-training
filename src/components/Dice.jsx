import React from 'react'

const diceImage = (number) => {
    switch(number) {
        case 1:
            return '../img/dice1.png'
        case 2:
            return '../img/dice2.png' 
        case 3:
            return '../img/dice3.png'
        case 4:
            return '../img/dice4.png'
        case 5:
            return '../img/dice5.png' 
        case 6:
            return '../img/dice6.png'  
        default:
            return '../img/dice1.png'
          
      }
}




const Dice = ({num, clickDice, isLoaded}) => {

    return (
      <div className='Dice px-3 py-3' onClick={clickDice} >
          
          {isLoaded ? <img src={diceImage(num)} alt='Dice Number' width='100'/> : <img src='../img/dice-empty.png' alt='Dice Number' width='100'/>}
          
      </div>
    )
  }

export default Dice