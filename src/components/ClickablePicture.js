import React, { Component } from 'react'

class ClickablePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageSource: props.img
        }
    }

    toggleImage(props) {
        if (this.state.imageSource === this.props.img) {
            this.setState({
                imageSource: this.props.imgClicked
            })
        } else {
            this.setState({
                imageSource: this.props.img
            })
        }
    }

    render() {
        return (
            <img className="thug-life-img" onClick={() => this.toggleImage()} src={this.state.imageSource} alt="Toggle element"/>
        )
    }
}

export default ClickablePicture
