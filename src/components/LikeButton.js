import React, { Component } from "react";

class LikeButton extends Component {
    state= {count:0}
    
	render() {
        let {count, changeColor} = this.state

        
        
    if      (count === 0 | count === 0+6) {changeColor= "purple"}
    else if (count === 1 | count === 1+6) {changeColor = "blue"}
    else if (count === 2 | count === 2+6) {changeColor = "green"}
    else if (count === 3 | count === 3+6) {changeColor = "yellow"}
    else if (count === 4 | count === 4+6) {changeColor = "orange"}
    else if (count === 5 | count === 5+6) {changeColor = "red"}
      
        
    return(

    <div className ="likeButton">
       <button 
            style={ 
                {backgroundColor: changeColor}
            }
       
        onClick={ ()=>{
           this.setState(   {changeColor}  )
           this.setState(   {count: count+1} )
           
                            }  
                        } >  
                    LIKES {count}
       </button>
       
    </div>
        
    )
}}
    
  




       
export default LikeButton;