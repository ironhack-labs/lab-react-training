import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    
    state = {
        clicked: true
    }
    
    imageHandler = () => {
        const opposite = !this.state.clicked
        this.setState( (state, props) => ({
            clicked: opposite
        }))
    }
    

    render() {
        return (
            <div>
                <img src={this.state.clicked ? this.props.img : this.props.imgClicked} alt="image" onClick= {this.imageHandler}/>
            </div>
        )
    }
}
