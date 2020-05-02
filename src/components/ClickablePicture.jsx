import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    
    state = {
        clicked: false
    }

    switchImage = () => {
       this.setState( {clicked:!this.state.clicked})
    }
    
    render() {
        return (
            <div onClick={this.switchImage}>
                {this.state.clicked ? <img src={this.props.imgClicked} alt="photoPerson"/> : <img src={this.props.img} alt="photoPerson"/>}
            </div>
        )
    }
}


