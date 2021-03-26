import React, { Component } from 'react'
import '../assets/css/Carousel.css'

class Carousel extends Component {
    state = {
        imgIndex: 0
    }

    previousPicture = () => {
        this.setState({
            imgIndex: this.state.imgIndex - 1 < 0 ? this.props.imgs.length -1 : this.state.imgIndex -1
        })
    }

    nextPicture = () => {
        this.setState({
            imgIndex: this.state.imgIndex + 1 > this.props.imgs.length - 1 ? (this.props.imgs.length + 1) - this.props.imgs.length : this.state.imgIndex +1
        })
    }

    render() {
        return (
            <div className="Carousel">
                <button onClick={this.previousPicture}>Previous</button>
                <img
                    src={this.props.imgs[this.state.imgIndex]}
                />
                <button onClick={this.nextPicture}>Next</button>
           </div> 
        )
    }
}

export default Carousel