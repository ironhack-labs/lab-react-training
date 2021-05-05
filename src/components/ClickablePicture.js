import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        clicked: false
    }
    clickHandler = () => {
        this.setState((state, props) => {
            return {
              clicked: !state.clicked
            }
        })
    }
    render() {
        return (
            <img onClick={this.clickHandler} src={this.state.clicked ? this.props.imgClicked : this.props.img} alt="a man that wears sunglasses when clicked on"/>
        )
    }
}