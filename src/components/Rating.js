import React, { Component } from "react";

class Rating extends Component{

    
        
    stars = (value) => {

        if(value === 0){
            return (<p> ★★★★★ </p>) 
        }
        else if(value >= 1 && value < 2){
            return (<p>⭐★★★★</p>)
        }
        else if(value >= 2 && value < 3){
            return (<p>⭐⭐★★★</p>)
        }
        else if(value >= 3 && value < 4){
            return (<p>⭐⭐⭐★★</p>)
        }
        else if(value >= 4 && value < 5){
            return (<p>⭐⭐⭐⭐★</p>)
        }
        else if(value >= 5 && value < 6){
            return (<p>⭐⭐⭐⭐⭐</p>)
        }
    }


    render(){
        return(<>
           <div className = "Stars">
               {this.stars(this.props.value)}
           </div> 
           </>
        )
        
    }
}


export default Rating;