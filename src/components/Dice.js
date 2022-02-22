import { useState } from "react"
import './Dice.css'


const Dice = () => {  
  const [dice, setDice] = useState('./img/dice3.png')
  const newImg = Math.round(Math.random() * 6);
  // const idTimeOut= setTimeout(() => setDice(`./img/dice${newImg}.png`),1000)
    return(
        <article className="dice">
          <img src={dice}/>
        </article>

    )
    
}

export default Dice
