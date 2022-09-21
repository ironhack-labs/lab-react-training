import React, { Component } from "react"
import './Carousel.css'
import right from '../../assets/images/right.png'
import left from '../../assets/images/left.png'

class Carousel extends Component {
    state = {
        index: 0,
        max: this.props.images.length - 1,
        mainImg: this.props.images[0],
    }

    right = () => {
        this.setState((prevState) => {
            if(prevState.index !== this.state.max) {
                return {
                    mainImg: this.props.images[prevState.index + 1],
                    index: prevState.index + 1
                }
            }
        })
    }
    
    left = () => {
        this.setState((prevState) => {
            if(prevState.index !== 0) {
                return {
                    mainImg: this.props.images[prevState.index - 1],
                    index: prevState.index - 1
                }
            }
        })
    }

    render() {
        return (
            <div className="car-container">
                <div id="left" onClick={this.left}>
                    <img src={left} alt="" width="40px" />
                </div>
                <img src={this.state.mainImg} alt="" />
                <div id="right" onClick={this.right}>
                    <img src={right} alt="" width="40px" />
                </div>
            </div>
        )
    }
}

export default Carousel