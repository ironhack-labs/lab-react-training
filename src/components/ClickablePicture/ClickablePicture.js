import React, { Component } from 'react'

import './ClickablePicture.css'
import img from "../../assets/images/maxence.png";
import imgClicked from "../../assets/images/maxence-glasses.png";

class ClickeablePicture extends Component {
    state = {
        img: this.props.img,
        src: img
    }

    handleSrc() {
        if(this.state.img === this.props.img){
            this.setState ({
                img: this.props.imgClicked,
                src: imgClicked
            })
        } else {
            this.setState( {
                img: this.props.img,
                src: img
            })
        }
    }

    render() {
        return(
            <img className='clickeableImg' onClick={ () => this.handleSrc()} src={this.state.src} alt="clickeable img" />
        )
    }
}

export default ClickeablePicture