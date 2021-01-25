import React, { Component } from 'react'
import img from './maxence.png'
import imgClicked from './maxence-glasses.png'

export class ClickablePicture extends Component {

    state = {
        imgClicked: false
    }

    handleImage = () => {
        let changeImg = ! this.state.imgClicked
        this.setState({
            imgClicked: changeImg
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.imgClicked ? img : imgClicked} onClick={this.handleImage} alt='Maxence'/>
            </div>
        )
    }
}

export default ClickablePicture
