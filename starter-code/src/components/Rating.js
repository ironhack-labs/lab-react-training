import React from 'react';
import 'bulma/css/bulma.css'
import './../index.css'

const Rating = (props)=>{

   let displayStars = ()=>{
    
        let number = Math.round(parseFloat(props.children))
        let total=[]
        for(let i = 0 ; i< 5 ; i++){
         
             if( i < number){
                total.push(<span className="fa fa-star checked " />)
            }else{
                total.push(<span className="fa fa-star"/>)
            } 
        }
       return total.map(ele=>ele)   
    }
    return(
        <div className="Rating">
            
            {displayStars()}
           
        </div>
        
        
    );

}

export default Rating;