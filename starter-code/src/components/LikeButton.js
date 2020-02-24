import React from "react"
import 'bulma/css/bulma.css'

class LikeButton extends  React.Component{
//const LikeButton = (props,state) =>{
  
    state={
        counterLikes: 0,
        backgroundColor : 'white'
        
    }

     counterLikes = () =>{
        console.log("inside counter likes")
        this.setState({
            counterLikes : this.state.counterLikes + 1,
            backgroundColor : this.randomColor()
        })
        
    }
    randomColor = ()=>{
        const colors = ['purple','blue','green','yellow','orange','red']
        let randomNumber= Math.floor(Math.random() * colors.length ) + 0;
    
        return colors[randomNumber]
        
    }
   
    render(){
        return(
            <button className="button" style= {{backgroundColor: this.state.backgroundColor}} onClick={this.counterLikes}> {this.state.counterLikes} Likes</button>
            )
        
    }
    
}
export default LikeButton;