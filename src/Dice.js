import './App.css';
import React from 'react';



const Diceimg={
    EmptyDice:"/img/dice-empty.png",
    DiceRolls:["/img/dice1.png","/img/dice2.png","/img/dice3.png","/img/dice4.png","/img/dice5.png","/img/dice6.png"]
}


class DiceRoll extends React.Component {
    state = {
        empty:true
    }

    RandomRoll= () =>{
             Math.floor(Math.random()*Diceimg.DiceRolls.length)
    }


    toggleEmpty = () => {
        this.setState(state=> ({empty:!state.empty}) )
    }

    getEmptyImage = () => this.state.empty ? "EmptyDice" : this.RandomRoll()
    
    render() {
        const DiceName= this.getEmptyImage
        return(
            <div className="DicePic">
                <img style={{maxWidth:"100px"}} src={Diceimg[DiceName]} onClick={this.toggleEmpty} alt="images"/>
            </div>
        )
    }
}

export default DiceRoll