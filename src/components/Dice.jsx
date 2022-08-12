import dice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import {useState} from 'react'

 const Dice = () => {
    const [pic, setPic] = useState(dice3)
    const pics = [dice, dice1, dice2, dice3, dice4, dice5, dice6]

    const handlerLoad = () => {
        let maxPicsPos = pics.length - 1
        setPic(()=>pics[0])
        setTimeout(()=>{
            let idx = Math.trunc(Math.random() * maxPicsPos)
            setPic(()=>pics[idx])
            console.log(pics[idx], idx)
        }, 1000)
    }
    return (
        <div>
            <h1>Dice</h1>
            <p>Cliclk for throw the dices</p>
            <br />
            <img style={{width:100}}
                src={pic}
                onClick= {() => {
                    handlerLoad()
                }}
                alt="Dice"
            />
        </div>
    )
}
    

export default Dice