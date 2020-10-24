import React, { Component } from 'react'

export default class Carousel extends Component {
    state ={
        imageIndex: 0 
    }

    nextImage = () => {
        if(this.state.imageIndex < (this.props.imgs.length- 1)) {
            this.setState({
                imageIndex: this.state.imageIndex + 1
            })
        }
        console.log(`image index is: ${this.state.imageIndex}`)
    }

    previousImage = () => {
        if(this.state.imageIndex > 0) {
            this.setState({
                imageIndex: this.state.imageIndex - 1
            })
        }
        console.log(`image index is: ${this.state.imageIndex}`)
    }

    render() {
        return (
            <div>
                <img src={this.props.imgs[this.state.imageIndex]} alt=""></img>
                <br/>
                <button onClick={this.previousImage}>Previous</button>
                <button onClick={this.nextImage}>Next</button>
            </div>
        )
    }
}
