import React from "react";


// instalamos libreria react icons 
// importamos el simbolo de estrella
// decidimos cual esta llena y cual vacia

const Rating = (props)=>{
    const starsRate = (rating)=>{
        let rounded = Math.round(rating)

        if (rounded === 0) return "☆☆☆☆☆";
        if (rounded === 1) return "★☆☆☆☆";
        if (rounded === 2) return "★★☆☆☆";
        if (rounded === 3) return "★★★☆☆";
        if (rounded === 4) return "★★★★☆";
        if (rounded === 5) return "★★★★★";

    }

    return (
        <div>   {starsRate  (props.children)}   </div>
      )
}
    
  




       
export default Rating;