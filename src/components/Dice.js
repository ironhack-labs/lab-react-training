import React from 'react';

class Dice extends React.Component {

    constructor(props) {
        super(props);
        this.diceImages = [
            "/img/dice1.png",
            "/img/dice2.png",
            "/img/dice3.png",
            "/img/dice4.png",
            "/img/dice5.png",
            "/img/dice6.png",
            "/img/dice-empty.png",
        ]
    }

    state= {
        image: '/img/dice-empty.png',

    }

    clearDie = ()=> {
        this.setState({
            image:'/img/dice-empty.png', 
        })
    }

    showDie = () => {
        this.setState(() => {
            return {
                image: this.diceImages[Math.floor(Math.random() * 6)]
            }
        })          
    }
    rollDie = () => {
        this.clearDie();
        setTimeout(this.showDie, 1000)
      
    }

    render() {
        return <img onClick={this.rollDie} src={this.state.image} style={{width: "100px", height: "100px"}}></img>
    }
}
export default Dice;