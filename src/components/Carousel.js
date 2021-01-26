import React from 'react';



class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            image: props.imgs[0]
        })
    }

    handleLeftClick() {
        let currentIndex = this.props.imgs.indexOf(this.state.image)

        if (currentIndex < this.props.imgs.length - 1) {
            currentIndex++
        } else {
            currentIndex = 0;
        }

        this.setState({
            image: this.props.imgs[currentIndex]
        })
    }

    handleRightClick() {
        let currentIndex = this.props.imgs.indexOf(this.state.image)

        if (currentIndex > 0) {
            currentIndex--
        } else {
            currentIndex = this.props.imgs.length - 1
        }

        this.setState({
            image: this.props.imgs[currentIndex]
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.image} alt="random user" />
                <button onClick={() => this.handleLeftClick()}>Left</button>
                <button onClick={() => this.handleRightClick()}>Right</button>
            </div>
        )
    }
}

export default Carousel;