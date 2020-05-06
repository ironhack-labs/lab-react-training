import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        clickState: false
    }

    handleClick = () => {
        this.setState({clickState: !this.state.clickState})
    }

    render(props) {
        return (
          <div>
            {this.state.clickState && <img src={this.props.imgClicked} onClick={this.handleClick} alt="glasses" />}
            {!this.state.clickState && <img src={this.props.img} onClick={this.handleClick} alt="normal" />}
          </div>
        );
    }
}
