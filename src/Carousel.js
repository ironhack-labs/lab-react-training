import React, { Component } from "react";

class Carousel extends Component {

    state = {
        img: 0
    }

    nextImg = () => {
        let { img } = this.state;

        if (img < 3) {
            img++
        } else {
            img = 0
        }

        this.setState({img})
    }

    prevImg = () => {
        let { img } = this.state;

        if (!img < 1) {
            img--
        } else {
            img = 3
        }

        this.setState({img})
    }

    render () {
        return (
            <div className="slider flex">
                <button onClick={this.prevImg}>←</button>

                <div className="slider__images">
                    <img src={this.props.imgs[this.state.img]} alt="" />
                </div>

                <button onClick={this.nextImg}>→</button>
            </div>
        )
    }
}

export default Carousel