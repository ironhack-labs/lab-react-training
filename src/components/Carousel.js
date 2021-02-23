import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props); //imgs
        this.state = {
            imgInd: 0
        }
    }

    clickHandler = (type) => {
        let currentInd = this.state.imgInd;
        let nextInd;
        if (type === 'left') {
            if (currentInd === 0) {
                nextInd = this.props.imgs.length - 1;
            } else {
                nextInd = currentInd - 1;
            }
        } else {
            if (currentInd === (this.props.imgs.length - 1)) {
                nextInd = 0;
            } else {
                nextInd = currentInd + 1;
            }
        }
        this.setState(() => ({
            imgInd: nextInd
        }))
    }

    render() {
        return (
            <div className="clickablePicture">
                <button onClick={() => this.clickHandler("left")}>Left</button>
                <img src={this.props.imgs[this.state.imgInd]} alt=""/>
                <button onClick={() => this.clickHandler("right")}>Right</button>
            </div>
        )
    }
}

export default Carousel;