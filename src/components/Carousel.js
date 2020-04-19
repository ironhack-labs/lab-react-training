import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        imgNumber: 0
    };

    showLeftImg = () => {
        let newImgNumber;
        const { imgNumber } = this.state;

        if(imgNumber === 0) {
            newImgNumber = this.props.imgs.length - 1;
        } else {
            newImgNumber = imgNumber - 1;
        }

        this.setState({
            imgNumber: newImgNumber
        });
    }

    showRightImg = () => {
        let newImgNumber;
        const { imgNumber } = this.state;

        if(imgNumber === this.props.imgs.length - 1) {
            newImgNumber = 0;
        } else {
            newImgNumber = imgNumber + 1;
        }

        this.setState({
            imgNumber: newImgNumber
        });
    }

    render() {
        const imgToDisplay = this.props.imgs[this.state.imgNumber];

        return (
            <div>
                <button onClick={this.showLeftImg}>Left</button>
                <img src={imgToDisplay} alt='' />
                <button onClick={this.showRightImg}>Right</button>
            </div>
        );
    }
}

export default Carousel;