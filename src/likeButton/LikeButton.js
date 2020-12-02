import React, {Component} from 'react';
import './LikeButton.css';

class LikeButton extends Component {
 constructor (props){
     super(props)
     this.state = { num:0 ,
                   color : 'orange'
                   }
     this.handleClick = this.handleClick.bind(this)
 }

 handleClick(e){
    let color = ['blue','black','green','blueviolet','red']
    let cradn =  color[Math.floor(Math.random()*color.length)];
   this.setState({num:this.state.num+1 , color:cradn})
 }

 render() {
    return (
     <div className="LikeButton">
         <button onClick= {this.handleClick} style={{backgroundColor:this.state.color}}>{this.state.num} Likes</button>
     </div>
         );
    }
}

export default LikeButton;