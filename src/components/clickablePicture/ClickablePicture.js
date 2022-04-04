import React, { Component } from 'react';
import './ClickablePicture.css'

class ClickablePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: true,    
        }
    }
    //this is working but how to overlap both images??
        
    changeImage = () => {
     
     this.setState({img: !this.state.img})
    }
   
  render() {
    return (
      <div className="card">
        <img 
        src={this.state.img ? this.props.img: this.props.imgClicked} 
        className="Maxence" 
        alt="..." 
        onClick={this.changeImage} 
        />
      </div>
    );
  }
}

export default ClickablePicture;
