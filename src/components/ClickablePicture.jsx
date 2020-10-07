import React, { Component } from 'react';

class ClickablePicture extends Component {
   
    state = {
        picture: this.props.img,
        glasses: false,
   };

   clikChangPic = () => {
        this.setState({
            glasses : !this.state.glasses ? true : false,
            picture: this.state.glasses ?  this.props.img : this.props.imgClicked
        });
   };

    render() {
        return (
            <div>
                <img onClick={this.clikChangPic} src={this.state.picture} alt=""/>
            </div>
        )
    }
}


export default ClickablePicture;