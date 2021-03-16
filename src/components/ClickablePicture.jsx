import React, { Component } from 'react'

export class ClicablePicture extends Component {
    state = {
        image: false,
      };

      handleClicks = () => {
        const currentState = this.state.image;
        this.setState({ image: !currentState });
    };

    render() {
        return (

            <div>
                <img onClick={this.handleClicks} src={this.state.image ? this.props.imgClicked : this.props.img} alt={this.state.image}/>
            </div>
        )
    }
}

export default ClicablePicture
