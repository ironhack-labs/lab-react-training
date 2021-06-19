import React, { Component } from 'react'

class Dice extends Component {
    constructor(props){
        super(props);
        this.state = {
            interactable: true,
            displayedImg: "img/dice3.png"
        };
        this.diceClick = this.diceClick.bind(this);
    }

    render() {
        return (
            <div className="dice">
                <img onClick={this.diceClick} src={this.state.displayedImg} alt="dice"/>
            </div>
        );
    }

    diceClick() {
        console.log(this.state.interactable);
        if(this.state.interactable) {
            this.setState({interactable:false});
            this.setState({displayedImg:"img/dice-empty.png"})
        }
        setTimeout(() => {
            this.setState({interactable:true})
            const rndInt = Math.floor(Math.random() * 6) + 1;
            this.setState({displayedImg:`img/dice${rndInt}.png`})
        }, 1000);
    }


}

export default Dice;