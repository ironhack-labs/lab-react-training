import React, { Component } from 'react'
// import dice1 from '.img/dice1.png'
// import dice2 from 'img/dice2.png'
// import dice3 from '/img/dice3.png'
// import dice4 from '../../public/img/dice4.png'
// import dice5 from '../../public/img/dice5.png'
// import dice6 from '../../public/img/dice6.png'

export default class Dice extends Component {

    state = {
        clicked: false,
        randomIndex: Math.floor(Math.random()*6),
        dice: ['/img/dice-empty.png', '/img/dice1.png', 'img/dice2.png','img/dice3.png', 'img/dice4.png', 'img/dice5.png', 'img/dice6.png']
    }
    
    clickHandler = () => {
        let random = Math.floor(Math.random()*6)
        this.setState((state, props) => ({
            clicked: !this.state.clicked,
            randomIndex: 0
        }))
        setTimeout(() => {
            if(this.state.clicked) {
                random = Math.floor(Math.random()*6)
                this.setState({
                    randomIndex: 0,
                })
            }
        }, 1);
        setTimeout(() => {
            if(this.state.clicked) {
                random = Math.floor(Math.random()*6)
                this.setState({
                    randomIndex: random,
                    clicked: !this.state.clicked
                })
            }
        }, 1000);    
    }
    

    render() {
        return (
            <div className="dice-box">
                <img src={this.state.dice[this.state.randomIndex]} onClick={this.clickHandler}alt=""/>
            </div>
        )
    }
}
