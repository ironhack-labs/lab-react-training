import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        clicked: false,
    }

    handleToggle = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div>
                <img onClick={this.handleToggle} src={this.state.clicked ? this.props.imgClicked : this.props.img} width="200"/>
            </div>
        )
    }
}
