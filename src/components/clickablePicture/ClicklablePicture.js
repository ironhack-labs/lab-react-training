import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        currentImage : this.props.img
    }

    clickImg = () => {
        if (this.state.currentImage === this.props.img ){
            this.setState({
                currentImage : this.props.img
              });
        } else {
            this.setState({
                currentImage : this.props.img2
              });
        }

    };

    render() {
        return (
            <div>
                <img 
                    onClick={this.clickImg} 
                    src={this.state.currentImage} alt="" 
                />
            </div>
        );
    }
}

export default ClickablePicture;