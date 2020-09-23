import React, { Component } from 'react'
import './ClickablePicture.css'

export default class ClickablePicture extends Component {

    state = {
        clickedPicture: false,
    }

    handlePicClick = () => {
        this.setState({
            clickedPicture: !this.state.clickedPicture
        })
    }

    render() {
       // console.log('this is clickable picture props', this.props)
        return (
            <img className="imgClick" onClick={this.handlePicClick} src={this.state.clickedPicture ? this.props.imgClicked : this.props.img} alt=""/>
        )
    }
}
