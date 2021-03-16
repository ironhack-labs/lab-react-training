import React, { Component } from 'react'
import '../styles/Carousel.css'

export class Carousel extends Component {

    state = {
        imgIndex: 0
    }

    handleNextPhoto = () => {
        this.setState(
            this.state.imgIndex === this.props.imgs.length - 1 ? {imgIndex: this.state.imgIndex = 0}  : {imgIndex: this.state.imgIndex + 1}
            )
    }
    handlePrevPhoto = () => {
        this.setState(
            this.state.imgIndex === 0 ? {imgIndex: this.props.imgs.length - 1}  : {imgIndex: this.state.imgIndex - 1}
            )
    }
    render() {
        return (
            <div className="Carousel">
                <img src={this.props.imgs[this.state.imgIndex]} alt="carousel photos"/>
                <button onClick={this.handlePrevPhoto}> Previous </button>
                <button onClick={this.handleNextPhoto}> Next </button>
            </div>
        )
    }
}

export default Carousel
