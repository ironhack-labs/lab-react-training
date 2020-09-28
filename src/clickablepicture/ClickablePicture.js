import React, { Component } from 'react';
import './ClickablePicture.css'

class ClickablePicture extends Component {
    state = {
        activeImg: this.props.img
    }

    handleOnClick = (e) => {
        e.preventDefault()
        let newImg;
        this.state.activeImg === this.props.img ? newImg = this.props.imgClicked : newImg = this.props.img
        this.setState({
            activeImg: newImg
        })
    }

    render() {
        return (
            <div className="clickable-pic">
                <a onClick={this.handleOnClick} href='#' ><img src={this.state.activeImg} /></a>
            </div>
        )
    }
}

export default ClickablePicture;