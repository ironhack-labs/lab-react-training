import React, { Component } from 'react'


class ClickablePicture extends Component {
    state = {
        img: this.props.img
    }

    glassMode = () => {
        if (this.state.img === this.props.img) {
            this.setState({
                img: this.props.imgClicked
            })
        } else {
            this.setState({
                img: this.props.img
            })
        }
    }
    
    render() {
        return (
            <div>
                <img src={this.state.img} onClick={this.glassMode} />
            </div>
        )
    }
}
export default ClickablePicture;
