import React, {Component} from 'react'
import '../assets/css/Dice.css'


class Dice extends Component {
    state = {
        img: this.randomImg()
    }
    
    randomImg () {
        const dices = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']
        return dices[Math.round(Math.random() * 5)]
    }

    onClickImg = () => {
        this.setState({ img: '/img/dice-empty.png' })
        setTimeout(() => {
            this.setState({img: this.randomImg()})
        }, 1000);
    }
    
    render() {
        return (
            <div className="Dice">
                <img
                    src={this.state.img}
                    onClick={this.onClickImg}
                />
            </div>
        )
    }
}

export default Dice