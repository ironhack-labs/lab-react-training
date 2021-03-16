import React, { Component } from 'react'

export default class Dice extends Component {

    pictures = ['/img/dice1.png','/img/dice2.png','/img/dice3.png','/img/dice4.png','/img/dice5.png','/img/dice6.png']
    randomPictures = this.pictures[Math.floor(Math.random()*this.pictures.length)]


    state={
        img : this.randomPictures
    }


    HandleClick=()=>{
        this.setState({ img: '/img/dice-empty.png' });

        this.randomPictures = this.pictures[Math.floor(Math.random()*this.pictures.length)]
        setTimeout(() => {
            this.setState({ img: this.randomPictures });

        }, 1000);

    }

    render() {
        return (
            <div>
            <img onClick={this.HandleClick} src={this.state.img} alt=''/>
            </div>
        )
    }
}
