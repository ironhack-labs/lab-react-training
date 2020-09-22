import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        clicked: false,
    }
    
    handleClick = () => {
      this.setState((state) => ({ clicked: state.clicked ? false : true}))
    }


    render() {
        return (
            <div>
                <img src={this.state.clicked ? this.props.img : this.props.imgClicked} onClick={this.handleClick} alt='pic'></img>
            </div>
        )
    }
}
