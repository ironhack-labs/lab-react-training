import { Component } from "react";


class Dice extends Component {
    state = {
        diceFace: '/img/dice-empty.png',
    }

    handleClick = () => {
        const faces = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']
        let newRandomFace = faces[Math.floor(faces.length * Math.random())];
        this.setState({
            diceFace: '/img/dice-empty.png',
        })
        setTimeout(() => {
            this.setState({
               diceFace: newRandomFace,
            }); 
           }, 1000);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                <img src={this.state.diceFace} alt='empty-pic'/>
            </button>
        )
    }
}

export default Dice;