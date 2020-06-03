import React, { Component } from 'react';

class ClickablePicture extends Component {
    state = {
        image: this.props.image
    }
    clickHandler = () => {
        if (this.state.image === this.props.image) {
            this.setState({
                image: this.props.imgClicked
            })
        } else {
            this.setState({
                image: this.props.image
            })
        }
    }
    render() {
        return <img onClick={this.clickHandler} src={this.state.image} width="350" height="350" alt=""/>
    }
}

export default ClickablePicture;