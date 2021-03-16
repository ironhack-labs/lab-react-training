import React, { Component } from 'react';
import './../views/Carousel.css'

export class Carousel extends Component {
    state = {
        imgIndex : 0
    }

    handlePrevious = () => {
        this.setState({imgIndex: (this.state.imgIndex - 1 < 0 ? this.props.imgs.length - 1 : this.state.imgIndex - 1) % this.props.imgs.length})
    }

    handleNext = () => {
        this.setState({imgIndex: (this.state.imgIndex + 1) % this.props.imgs.length})
    }

    render() {
        return (
            <div className="Carousel">
                <button onClick={this.handlePrevious}>
                    {`<`}
                </button>

                <img src={this.props.imgs[this.state.imgIndex]} alt="carousel of pictures" />

                <button onClick={this.handleNext}>
                    {`>`}
                </button>
            </div>
        )
    }
}

export default Carousel
