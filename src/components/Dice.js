import React, { Component } from 'react'


class Dice extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: props.dices,
            currentImage: 0
        }
    }

    switchImage = () => {
        this.setState(({currentImage}) => ({currentImage:Math.floor(Math.random()*(this.state.images.length - 1)) + 1}))
    }

    changeImage= () => {
        this.setState(({currentImage}) => ({currentImage:0}))
        setTimeout(this.switchImage, 1000)
      }

    render() {
        return (
            <img className='dice-img' src={this.state.images[this.state.currentImage]}  alt='running dices'  onClick={this.changeImage}/>
        )
    }
}

export default Dice