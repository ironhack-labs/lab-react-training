import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        withGlasses: true
    }

    changeImage = () => {
        this.setState({withGlasses: !this.state.withGlasses})
    }

    render() {
        console.log(this.state.withGlasses)
        return (
            <div onClick={this.changeImage}>
                <img src={this.state.withGlasses ? this.props.img : this.props.imgClicked} alt="guy-with-glasses"/>     
            </div>
        )
    }
}
