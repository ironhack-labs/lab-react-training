import React, { Component } from 'react'

class ClickablePicture extends Component {
    state = {
        counter:0,
    }
    handleClick = () => {
        this.setState({counter: this.state.counter +1})
    }
    render() {
        return (
            <div>
                <img style={{
                    width: 200
                }} onClick={this.handleClick} src={(this.state.counter%2===0)? this.props.img : this.props.imgClicked} alt="Maxence with or without sunglasses"/>
            </div>
        )
    }
}

export default ClickablePicture
