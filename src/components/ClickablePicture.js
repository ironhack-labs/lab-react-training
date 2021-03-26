import React, { Component } from 'react';
import '../assets/css/ClickablePicture.css'

export default class ClickablePicture extends Component {
    state = {
        imgA: this.props.img,
        imgB: this.props.imgClicked,
        img: this.props.img
    }

    handleClick = () => {
        let img = '';
        this.state.img === this.state.imgA
            ? img = this.state.imgB
            : img = this.state.imgA
        this.setState({
            img: img
        })
    }

    render() {
        return (
            <button className='ClickablePicture' onClick={this.handleClick}>
                <img src={this.state.img} />
            </button>)
    }
}
