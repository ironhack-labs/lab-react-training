import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        pictures: this.props.imgs,
        index: 0
    }

    previousPicture = () => {
        this.setState({
            index: this.state.index === 0 ? 3 : this.state.index -1
        })
    }

    nextPicture = () => {
        this.setState({
            index: this.state.index === 3 ? 0 : this.state.index +1
        })
    }

    render() {
        

        return (
            <div>
                <button onClick={this.previousPicture}>Left</button>
                <img className="carousel"
                    src={this.props.imgs[this.state.index]} 
                    alt='carousel with people' ></img>
             
                <button onClick={this.nextPicture}>Right</button>
            </div>
        )
    }
}
