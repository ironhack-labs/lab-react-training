import React, {Component} from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {
 constructor (props){
     super(props)
     this.state = { click:false }
     this.handleClick = this.handleClick.bind(this)
 }

 handleClick(e){
   this.setState({click:!this.state.click})
 }

 render() {
    return (
     <div className="Click">
     {this.state.click? 
        <img src='/img/persons/maxence-glasses.png' alt="person" onClick={this.handleClick}></img> :
        <img src='img/persons/maxence.png' alt="person" onClick={this.handleClick}></img> 
        }    
     </div>
         );
    }
}

export default ClickablePicture;