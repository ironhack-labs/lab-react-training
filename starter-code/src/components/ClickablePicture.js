import React, { Component } from 'react';

class ClickablePicture extends Component {
    state = {
        isClicked: false
    }

    clickedPhoto = () => {
        this.setState ({
           isClicked: !this.state.isClicked
        })
    }

    render () {
        return(
            <img
                onClick={this.clickedPhoto}
                src={this.state.isClicked ? this.props.imgClicked : this.props.img}
                alt={this.state.isClicked.toString()}
            />
        )
    }
}

export default ClickablePicture;