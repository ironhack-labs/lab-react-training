import React, {Component} from "react"

class Dice extends Component {
    state = {
        img: "/img/dice3.png"
    }
    handleClick = () => {
        const diceNumbers = [ "/img/dice1.png","/img/dice2.png","/img/dice3.png","/img/dice4.png","/img/dice5.png","/img/dice6.png"]
        const randomNumber = diceNumbers[Math.floor(Math.random() * diceNumbers.length)]
        this.setState({img:"/img/dice-empty.png"})
        setTimeout(()=> {
            this.setState({img:randomNumber})
        },1000)
    }
    render(){
        return <img alt="Dice" onClick={this.handleClick} style={{ width:"300px", height:"300px"}} src={this.state.img}/>
    }
}

export default Dice;