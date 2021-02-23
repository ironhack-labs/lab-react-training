import React, { Component } from 'react'
import './Carousel.css'

export default class Carousel extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        current: Math.floor(Math.random() * (4 - 1)) + 1
    }
    prevImg = () => {
        if (this.state.current === 0) {
            this.setState({ current: this.props.imgs.length - 1 })
        } else {
            this.setState({ current: this.state.current - 1 })
        }
    }
    nextImg = () => {
        if (this.state.current === this.props.imgs.length - 1) {
            this.setState({ current: 0 })
        } else {
            this.setState({ current: this.state.current + 1 })
        }
    }

    render() {
        console.log(this.props.imgs)
        return (
            <div className='carousel'>
                <button className='uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400' onClick={this.prevImg}>Left</button>
                <img src={this.props.imgs[this.state.current]} alt="Image Carousel" />
                <button className='uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400' onClick={this.nextImg}>Right</button>
            </div>
        )
    }
}
