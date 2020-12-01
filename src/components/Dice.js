import React, { Component } from 'react';

class Dice extends Component {

    constructor(props){
        super(props);
        let randomNum = Math.floor(Math.random() * (6)) + 1;
        this.state = {
            img: "../../img/dice" + randomNum + ".png"
        }
    }

    randomImg = () => {
        this.setState({img: "../../img/dice-empty.png"});
        let randomNum = Math.floor(Math.random() * (6)) + 1;
        setTimeout(() => {
            this.setState({img: ("../../img/dice" + randomNum + ".png")})
        }, 1000);
    }

    render() {
        return (
            <div>
                <img src={this.state.img} alt="Dice" className="dice" onClick={this.randomImg}></img>
            </div>
        );
    }
}

export default Dice;