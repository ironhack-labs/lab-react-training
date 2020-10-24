import React, { Component } from 'react'
import './ClickablePicture.css'

export default class ClickablePicture extends Component {
    state = {
        clicked: false
    }

    updateImage = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div onClick={this.updateImage}>
                {this.state.clicked ? 
                <img src={this.props.imgClicked} alt=""></img>
                : <img src={this.props.img} alt=""></img>
                }
            </div>
        )
    }
}
