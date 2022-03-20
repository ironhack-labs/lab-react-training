import React, {Component} from 'react';

class ClickablePicture extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
          <img src='./assets/images/maxence.png' alt="man"/>
        </div>
    )
  }
}

export default ClickablePicture;
