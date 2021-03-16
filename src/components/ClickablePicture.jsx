import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ClickablePicture extends Component {
    state ={
        imgSrc : this.props.img,
        imgSwitch: this.props.imgClicked
    }

    switchClick = () => {
        this.setState({imgSrc: this.state.imgSwitch})
    }

    originalClick = () => {
        this.setState({imgSrc: this.state.imgSrc})
    }
    
    render() {
      
        
        return (
            <div>
                <img src={this.state.imgSrc} onClick={this.switchClick} onDoubleClick={this.originalClick} alt=""/>
            </div>
        )
    }
}

export default ClickablePicture
