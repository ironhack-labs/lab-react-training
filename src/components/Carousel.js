import React, { Component } from 'react'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.imgs,
            index: 0
        }
    }

    slideImage = (event) => {
        let newIndex = this.state.index;

        if (event.target.innerText === "Next") {
            newIndex = newIndex === (this.state.images.length - 1) ? 0 : newIndex + 1;
        } else {
            newIndex = newIndex - 1 < 0 ? this.state.images.length - 1 : newIndex - 1;
        }

        this.setState(() => ({
            index: newIndex
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.slideImage}>Previous</button>
                <img src={this.state.images[this.state.index]} alt=""/>
                <button onClick={this.slideImage}>Next</button>
            </div>
        )
    }
}

export default Carousel;
