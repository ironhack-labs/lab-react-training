import React, { Component } from 'react'

export class ClickablePictures extends Component {
    state = {
        isGlass: false
    }

    render() {

        return (
            <div>
                <img 
                    src={this.state.isGlass ? this.props.imgClicked : this.props.img} 
                    alt="maxence"
                    onClick={() => this.setState({isGlass : !this.state.isGlass})}
                />
            </div>
        )
    }
}

export default ClickablePictures
