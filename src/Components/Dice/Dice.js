import React, { Component } from 'react'
import DiceEmpty from '../../assets/images/dice-empty.png'
import DiceOne from '../../assets/images/dice1.png'
import DiceTwo from '../../assets/images/dice2.png'
import DiceThree from '../../assets/images/dice3.png'
import DiceFour from '../../assets/images/dice4.png'
import DiceFive from '../../assets/images/dice5.png'
import DiceSix from '../../assets/images/dice6.png'



class Dice extends Component {


    state = {
        img: DiceOne,
    }

    diceNumber=[DiceOne,DiceTwo,DiceThree,DiceFour,DiceFive,DiceSix]

    throwingDice = () => {
        this.setState({
        img: DiceEmpty
        })
    

    setTimeout(() => {
        let randomDice = Math.round(Math.random()* this.diceNumber.length)
        this.setState({
            img: this.diceNumber[randomDice]
        })
    }, 1000);

}

   

    render (){


        return(
            <button className='Dice'
                    style={{border:'none', backgroundColor:'transparent'}}
                    onClick={()=>{
                        this.throwingDice()
                    }}>
                <img style={{height:150, width:150}}
                src= {this.state.img} >
                </img>
            </button>

        )
    }

}

export default Dice

