import React from "react";
import "./Rating.css";
import Star0 from "./0star.png"
import Star1 from "./1star.png"
import Star2 from "./2star.png"
import Star3 from "./3star.png"
import Star4 from "./4star.png"
import Star5 from "./5star.png"

const Rating = ({children}) =>{
let round = Math.round(Number(children));

let rate;
if(round === 0){
    rate = Star0;
} if(round === 1){
    rate = Star1;
}if(round === 2){
    rate = Star2;
}if(round === 3){
    rate = Star3;
}if(round === 4){
    rate = Star4;
}if(round === 5){
    rate = Star5;
}


return(
  <div className="Rating">
      <img src= {rate} alt=""/>
  </div>  
)
}
export default Rating;