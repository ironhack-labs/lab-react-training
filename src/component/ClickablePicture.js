import React, { Component } from 'react'

export default class ClickablePicture extends Component {
   
    state = {
        isClicked: false,
        source: this.props.img
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.isClicked,
            source: this.state.source === this.props.imgClicked ? this.props.img : this.props.imgClicked
        })
    }
   
    render() {
        return (
            <div>
              <img onClick = {this.handleClick} src={this.state.source} alt="click on it"/>  
            </div>
        )
    }
}
