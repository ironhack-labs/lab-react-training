import React, { Component } from 'react'

class ClickablePicture extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }

    state = {
        isClicked: false,
    };

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked });
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <img 
                src={this.isClicked ? this.props.imgClicked : this.props.img}
                alt="mc 100s"
                />
            </div>
        )
    }
}

export default ClickablePicture