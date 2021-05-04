import React from 'react';

class ClickablePicture extends React.Component {

    state = {
        image: this.props.img
    }

    changeImg = () => {
        this.setState((state) => {
            if (state.image === this.props.img) return {image: this.props.imgClicked}
            else return {image: this.props.img}
        })
    }
    

    render() {
        return <img onClick={this.changeImg} src={this.state.image} style={{width: '200px'}}></img>
    }
    
}

export default ClickablePicture;