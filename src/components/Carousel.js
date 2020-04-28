import React, { Component } from "react";
import "../index.css"

class Carousel extends Component {
    state = {
        img: 0
    }

    images = ["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg", "https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"];

    moveRight = () => {
        let {img} = this.state;
        if (img + 1 > 3) {
            img = 0;
        } else {
            img = img + 1;
        }
        this.setState({img});
    }

    moveLeft = () => {
        let {img} = this.state;
        if (img - 1 < 0) {
            img = 3;
        } else {
            img = img - 1;
        }
        this.setState({img});
    }

    render() {
        const { img } = this.state;
        const { moveRight, moveLeft, images } = this;

        return (
            <div className="carousel">
                <button className="carousel-button" onClick={moveLeft}>Left</button>
                <img src={images[img]} alt=""/>
                <button className="carousel-button" onClick={moveRight}>Right</button>
            </div>
        )
    }
}

export default Carousel;