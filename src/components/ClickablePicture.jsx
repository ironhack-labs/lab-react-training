import React, { Component } from 'react'

export class ClickablePicture extends Component {

    state = {
isClicked : false,
    };

    handleClick = () => {
        if (this.state.isClicked) {        
        this.setState ({isClicked : false})
        }
        else
        this.setState ({isClicked : true})
    }

    changeImage = () => {
        if(this.state.isClicked) return this.props.imgClicked
        else return this.props.img
    }

    render() {
        return (
            <div>
            <button onClick = {this.handleClick}>
              <img src = {this.changeImage()} alt = 'a picture'/> 
              </button>
            </div>
        )
    }
}

export default ClickablePicture
