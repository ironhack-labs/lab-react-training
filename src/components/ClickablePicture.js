import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        image: false
    };

    togglePicture = () => {
        this.setState({ image:true })
    };

    render() {
        return (
            <div>
                <img onClick={this.togglePicture} src={this.state.image ? this.props.imgClicked : this.props.img} alt="Guy without glasses and with glasses upon clicking"/>
            </div>
        )
    }
}
