/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';



class ClickablePicture extends Component {
  constructor(){
    super();
    this.state = {
      active:true
    };
  
    this.glasses = this.glasses.bind(this);
  }

  glasses(){
    this.setState( previousState => ({
      active: !previousState.active
    }))
  };
   
  render() {
    const { img,
            imgClicked,
            } = this.props;

    /*const divStyle = {
        color: color,
        backgroundColor: bgColor,
        width: '18em',
        height:'auto'
    };*/

    
    return( 
      <div className="App">
        <img style={ {display: this.state.active ? 'none' : 'block'}} onClick={this.glasses} src={img} />
        <img style={ {display: this.state.active ? 'block' : 'none'}} src={imgClicked} onClick={this.glasses}/>
      </div>
    );
  }
};


export default ClickablePicture;