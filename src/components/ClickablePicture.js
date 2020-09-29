import React, { Component } from 'react'

class ClickablePicture extends Component {
    state= {
        isClickable :false,
        image: this.props.img
    }

    toggleImg = () => {
        this.setState({
          isClickable: !this.state.isClickable,
          image : this.state.image === this.props.img? this.props.imgClicked : this.props.img
        });
      };

    render() {
        return (
            <div>
            <div>
                <img onClick={this.toggleImg} src={this.state.image} alt="click on it"/>
            </div>
            </div>
        )
    }
}

export default ClickablePicture
