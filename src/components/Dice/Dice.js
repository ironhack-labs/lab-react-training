import { useState } from "react"

function Dice () {

    let dicesArr = ['./assets/images/dice-empty.png', './assets/images/dice1.png', './assets/images/dice2.png', './assets/images/dice3.png', './assets/images/dice4.png', './assets/images/dice5.png', './assets/images/dice6.png']
    let [dices, setDices] = useState(dicesArr[0])

    const getRandomDices = () => {
        
        let randomNumber = Math.floor(Math.random() * 5 +1)
       

        if (randomNumber === 1){
            setDices(dicesArr[1])
        } else if (randomNumber ===2){
            setDices(dicesArr[2])
        } else if (randomNumber === 3){
            setDices(dicesArr[3])
        }else if (randomNumber === 4){
            setDices(dicesArr[4])
        }else if (randomNumber === 5){
            setDices(dicesArr[5])
        }else if (randomNumber === 6){
            setDices(dicesArr[6])
        }
        
    }
    // setTimeout(getRandomDices, 1000)
    
    return ( 
    <>
      <img onClick= {getRandomDices} src={dices}/>
        
    </> 
    );
}

export default Dice;