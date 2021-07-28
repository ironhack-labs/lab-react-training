import React, { Component } from "react";
import '../App.css'

class LikeButton extends Component{

    state= {
        color : 'white'
    }


    colors = () => {

    let cor = [ "aqua" , "Chocolate2" ,"DarkGreen" , "DarkSeaGreen","DarkOrange","LightSalmon","MediumBlue","Turquoise2","HotPink4","Firebrick4","Chartreuse4","DarkMagenta"]

    let random = Math.floor(Math.random() * cor.length)
   
   
   
    
    
    
    
    
    if(this.state.color){
        this.setState(
           { color : cor[random]}
        )
    }


    }

    render() {
        return (
            <>

            <button onClick = {this.colors} style = {{backgroundColor: this.state.color}} className = "bt">Like</button>


            </>
        )
    }
}

export default LikeButton