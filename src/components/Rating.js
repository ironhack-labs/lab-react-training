import React from "react";
import '../styles/Rating.css';


const Rating = (props) => {

    if(Math.round(props.children) > 4) {
        return <div>5: "★★★★★"</div>
    } else if(Math.round(props.children) >3) {
        return <div>4: "★★★★☆"</div>
    } else if(Math.round(props.children) >2){
        return <div>3: "★★★☆☆ "</div>
    } else if(Math.round(props.children) >1){
        return <div>2: "★★☆☆☆"</div>
    } else if(Math.round(props.children) >0){
        return <div>1: "★☆☆☆☆"</div>
    } else {
        return <div>0: "☆☆☆☆☆"</div>}

}



export default Rating;