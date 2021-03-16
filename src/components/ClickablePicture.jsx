import React, { Component } from "react";


class ClickablePicture extends Component {

     handleClick= (props) => {
      <img src="{props.imgClicked}" alt=""/>
   
    };
     
  render(props) {
    return(
      <img onClick={this.handleClick} src="{props.img}" alt=""/>
    )
    

  }

}



export default ClickablePicture;