import React, { Component } from 'react'

export class ClickablePicture extends Component {
    state = {
        index: 0,
    }

    handlePicture = () => {
        this.setState({ index: this.state.index + 1 })
    }

    render() {
        if (this.state.index % 2 === 0){
            return (
                <div>
                    <img onClick={this.handlePicture} src={this.props.img} alt="image"/>
                </div>
            )} return (
                <div>
                    <img onClick={this.handlePicture} src={this.props.imgClicked} alt="image"/>
                </div>
            )
    }
}

export default ClickablePicture
