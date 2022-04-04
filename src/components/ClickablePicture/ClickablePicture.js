import React, { Component } from 'react';
import './ClickablePicture.css'

class ClickablePicture extends Component {
   constructor(props) {
       super(props);
       this.state = {
           image: this.props.imgClicked
       } 
   }

   clickEffect = () => {
       this.setState({
           image: this.props.imgClickable
       })
   }
   render(){
       return(
           <div>
          <img className='click-img' alt='/' onClick={this.clickEffect} src={this.state.image}></img>

           </div>
       )
   }
}
export default ClickablePicture;