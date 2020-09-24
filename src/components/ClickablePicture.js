import React, { Component } from 'react'

class ClickablePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickState: 0
        }
        this.img = [
            props.img,
            props.imgClicked
        ];
    }

    imgClicked () {
        this.setState({
            clickState: this.state.clickState ? 0 : 1
        })
    }

    render() {
        return (
            <img 
                className="clickable ClickablePicture" 
                onClick={() => this.imgClicked()} 
                src={this.img[this.state.clickState]} 
                alt="clickable" 
            />
        );
    };
};

export default ClickablePicture;
