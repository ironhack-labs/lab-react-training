import React from 'react'

class Dice extends React.Component {
    state = {
        img: "/img/dice1.png"
    }
    images = []

    handleClick = () => {
        const images = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png' ]
        const randomImage = images[Math.floor(Math.random()*6)]
        
        var timeoutID = setTimeout( () => {
            this.setState({
                img: "/img/dice-empty.png"
            })
        }, 1)
        var timeoutID = setTimeout ( () => {
            this.setState({
                img: randomImage
            })
        }, 1000)
    }

    render() {
        return (
           <img src={this.state.img} onClick={this.handleClick} style={{width: "25px"}} alt="dice image"/>
        )
    }
}

export default Dice
