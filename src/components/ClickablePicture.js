import React, { Component } from 'react'

export default class ClickablePicture extends Component {
        state = {
            clicked: true,
        }

        addGlasses = () => {
         this.setState((state, props) => ({
            clicked: !state.clicked
         }))
        }

    render() {        
        return (
            <div>
                <img src={this.state.clicked? this.props.img : this.props.imgClicked} alt="no glasses" onClick={this.addGlasses}/>
            </div>
        )
    }
}
