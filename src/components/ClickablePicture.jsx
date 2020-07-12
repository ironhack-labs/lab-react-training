import React, { Component } from 'react'

class ClickablePicture extends Component {
    changeImage = ({target}) => {
        target.src = `${this.props.imgClicked}`
    }
    render() {
        return (
            <div className='clickable-picture'>
                <img onClick={this.changeImage} src={this.props.img} alt="maxence"/>
            </div>
        )
    }
}

export default ClickablePicture

