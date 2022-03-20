import './ClickablePicture.css';
import React, {Component} from 'react';

class ClickablePicture extends Component {
    state = {
        picture: this.props.img
    };

    toggleImage(){
        if(this.state.picture === this.props.img){
            this.setState({
                picture: this.props.imgClicked
            })
        } else {
            this.setState({
                picture: this.props.img
            })
        }
    }

    render(){
        return (
            <img onClick={() => this.toggleImage()} src={this.state.picture} alt="" />
        )
    }
};

export default ClickablePicture;