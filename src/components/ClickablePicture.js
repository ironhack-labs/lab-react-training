import React, { Component } from 'react';

class Clickablepicture extends Component {
    state = {
        currentImage : this.props.img
    }

    handleImg = () => {
        if (this.state.currentImage === this.props.img ){
            this.setState({
                currentImage : this.props.img2
              });
        } else {
            this.setState({
                currentImage : this.props.img
              });
        }
      
    };

    render() {
        return (
            <div>
                <div>
                    <img onClick={this.handleImg} src={this.state.currentImage} alt="" />
                </div>
            </div>
        );
    }
}

export default Clickablepicture;


