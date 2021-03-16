import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        imageNum: 0
    }

    nextImg = () => {
        this.setState({imageNum: (this.state.imageNum+1)%4})
    }

    previousImg = () => {
        this.setState({imageNum: (this.state.imageNum -1 < 0 ? 3 : this.state.imageNum -1)%4})
    }
 
    render() {
        return (
            <div>
                <img src={this.props.imgs[this.state.imageNum]} alt="carousel"/>
                <button onClick={this.nextImg}>to the left</button>
                <button onClick={this.previousImg}>to the right</button>
            </div>
        )
    }
}
