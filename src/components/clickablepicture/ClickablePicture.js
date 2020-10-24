import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state ={ 
        img: "/img/persons/maxence.png"
    }

    clickedImage = () => {
        let showImg
        if (this.state.img === "/img/persons/maxence.png") {
            showImg = '/img/persons/maxence-glasses.png'
        } else {
            showImg = "/img/persons/maxence.png"
        }
        this.setState({
            img: showImg
        })
    }

    render() {
        return (
            <div onClick={this.clickedImage}>
                <img src={this.state.img} alt="img"/>
            </div>
        )
    }
}
