import React, { Component } from 'react'

export default class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: 0
        }
    }

    slideButton = (direction) => {
        let currentImage = this.state.image;
        let lastImage = this.props.imgs.length -1;
        let newImage;

        if (direction === -1) {
            newImage = currentImage === 0 ?  lastImage : currentImage - 1;
        } else {
            newImage = currentImage === lastImage ?  0 : currentImage + 1;
        }
        this.setState({ image: newImage });
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.slideButton}>‹</button>
                <img src={this.props.imgs[this.state.image]} alt="casousel images" />
                <button type="button" onClick={this.slideButton}>›</button>
            </div>
        )
    }
}
