import React, { Component } from 'react'
const diceSides = {
    1:"/img/dice1.png",
    2:"/img/dice2.png",
    3:"/img/dice3.png",
    4:"/img/dice4.png",
    5:"/img/dice5.png",
    6:"/img/dice6.png"
}
export default class Dice extends Component {
    state = {
        img: diceSides[Math.floor(Math.random() * 6) + 1] //  or Object.keys(diceSides).length instead of 6
    }

    changeImg = () => {
        this.setState({
            img: "/img/dice-empty.png"
        })
        setTimeout(()=> {
            this.setState({
                img: diceSides[Math.floor(Math.random() * 6) + 1]
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <img style={{width:"100px"}} onClick={this.changeImg} src={this.state.img} alt=""/>
            </div>
        )
    }
}
