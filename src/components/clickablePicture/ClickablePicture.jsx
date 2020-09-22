import React from 'react';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
    
        
    state = {
        links: this.props.img,
    }
    
  click = () => {
    this.state.links === this.props.img ? this.setState({ links: this.props.imgClicked }) : this.setState({ links: this.props.img })
   
   
  };

  render() {
    return (
      
      <div>
          
        <img onClick={this.click} className="image-click" src={this.state.links} alt="" />

      </div>
    );
  }
}
export default ClickablePicture;
