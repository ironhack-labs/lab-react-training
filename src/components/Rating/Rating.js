import React from "react";

const Rating = (props) => {
    if(props.children > 1) {
        return <div>"☆☆☆☆☆"</div>
    } else if(props.children >= 1 && props.children < 2) {
        return <div>""★☆☆☆☆"</div>
    } else if(props.children >= 2 && props.children < 3){
        return <div>"★★☆☆☆ "</div>
    } else if(props.children >= 3 && props.children < 4){
        return <div>"★★★☆☆"</div>
    } else if(props.children >= 4 && props.children < 5){
        return <div>"★★★★☆"</div>
    } else {
        return <div>"★★★★★"</div>}
}

export default Rating;