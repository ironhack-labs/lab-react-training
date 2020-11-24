import React, { Component } from 'react';


class ClickablePicture extends Component {

    state = {
        isInitialImage: true
    }

    handleClick = () => {
        this.setState(
            {isInitialImage : !this.state.isInitialImage }
        );
    }

    render() {
        return (
            <img className="ClickablePicture" 
                src={this.state.isInitialImage ? this.props.initialImage : this.props.clickedImage} 
                alt="clickable" 
                onClick={this.handleClick}/>
        );
    }
};

export default ClickablePicture;