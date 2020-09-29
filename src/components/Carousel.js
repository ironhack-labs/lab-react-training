import React, { Component } from 'react'

class Carousel extends Component {
    state = {
        index: 0,
        image: this.props.imgs[0]
        }

    handleClick = (side) => {
        let newIndex;
        if(side === "right") {
            this.state.index < this.props.imgs.length-1 ? newIndex = this.state.index + 1 : newIndex = 0
        }
        if(side === "left"){
            this.state.index > 0 ? newIndex = this.state.index - 1 : newIndex = this.props.imgs.length-1
        }
        let newImage = this.props.imgs[newIndex]
        this.setState({
            index: newIndex,
            image: newImage
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick("left")}>Left</button>
                <img src={this.state.image} alt="carousel"/>
                <button onClick={() => this.handleClick("right")}>Right</button>
            </div>
        )
    }
}

export default Carousel
