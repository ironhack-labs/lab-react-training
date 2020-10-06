import React from "react";

const Rating = ({children}) => {
    var rating = Math.round(Number(children));
    const stars =[];
    for (let i = 0; i < 5; i++) {
        if(i< rating){
            stars.push(<span key={i}>★</span>)
        } else {
            stars.push(<span key={i}>☆</span>);
        }
       
        
    }
   return <div>{stars}</div>
  };
export default Rating;