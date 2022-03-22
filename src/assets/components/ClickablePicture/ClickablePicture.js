import React, {Component} from 'react';
import './ClickablePicture.css';


class ClickablePicture extends Component {
  constructor(props){
    super(props);
    this.state = { 
      image: this.props.img
    }
  }
  clickEffect = () => {
    this.setState({
      image: this.props.imgClicked
    })
  }
  render(){
    return(
        <div>
          <img  className="click-img" 
                onClick={this.clickEffect} 
                src={this.state.image} alt="man"/>
        </div>
    )
  }
}

 export default ClickablePicture;