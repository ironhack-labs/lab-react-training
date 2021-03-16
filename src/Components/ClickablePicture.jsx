import React, { Component } from 'react'
import '../styles/ClickablePicture.css'

export class ClickablePicture extends Component {

    state = {
        hasGlasses: false,
    }
    displayGlasses = () => {
        this.setState(
            this.state.hasGlasses ? {hasGlasses: this.state.hasGlasses= false} : {hasGlasses: this.state.hasGlasses = true}
            )
        
    }
    render() {
        const {img, imgClicked} = this.props
        return (
            <div className="ClickablePicture" onClick={this.displayGlasses}>
                {!  this.state.hasGlasses && <img src={img} alt="portrait"/>}
                {this.state.hasGlasses && <img src={imgClicked} alt="portrait with glasses"/>}
            </div>
        )
    }
}

export default ClickablePicture
