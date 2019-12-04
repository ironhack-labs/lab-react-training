import React, { Component } from 'react';


class ClickablePicture extends Component {
    state = {
        "clicked": false
    }

    isClicked = () => {
        this.setState({
            "clicked": !this.state.clicked
        })
    }

    render() {
        return (
            <div id="ClickablePicture">
            <img
                onClick={this.isClicked}
                src={this.state.clicked ? this.props.img : this.props.imgClicked} alt="" />
            </div>
        )
    }

}

export default ClickablePicture;