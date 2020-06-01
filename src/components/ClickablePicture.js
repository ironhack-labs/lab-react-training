import React, { Component } from 'react';

class ClickablePicture extends Component {
    state = {
        image: this.props.img
    }
    clickHandler = () => {
        if (this.state.image === this.props.img) {
            this.setState({
                image: this.props.imgClicked
            })
        } else {
            this.setState({
                image: this.props.img
            })
        }
    }
    render() {
        return <img onClick={this.clickHandler} src={this.state.image} width="350" height="350" alt=""/>
    }
}

export default ClickablePicture;