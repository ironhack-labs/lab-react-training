import React, { Component } from 'react';

//IT.9
class ClickablePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }))
    }
    render() {
        return (
            <div>
                <img onClick={this.handleClick} src={this.state.isClicked ? this.props.imgClicked : this.props.img} alt="change"></img>
            </div>
        )
    }
}

export default ClickablePicture; 