import React from 'react';

const Rating =(props)=>{
    const {children} = props
    
    const RatingStars =()=>{

        if(children <= 0.4){
            return "☆☆☆☆☆"
        
        }else if(children <= 1.49 && children >= 0.5){

                return "★☆☆☆☆"

        }else if(children >= 1.50 && children <= 2.49){

            return "★★☆☆☆"

        }else if(children >= 2.50 && children <= 3.49){

            return "★★★☆☆"

        }else if(children >= 3.50 && children <= 4.49){

            return "★★★★☆"
        }else if(children >= 4.50 && children <= 5){

            return "★★★★★"

        }



    }
    
    
    return (
       
        <p>{RatingStars()}</p>
    
      
    )
    }
    
    export default Rating;