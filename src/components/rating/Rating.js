import React from 'react';

//its functional, doesnt need extending component, dosnt have state
function Rating(props){


   
 const  countingStars = (num) => {

    for(let i=0; i<num; i++){
        //number = document.getElementsByClassName('star');
        let number = document.getElementsByClassName('star');
        console.log(number[0])
    }

} 

    return (
        
        <div id="stars" style={{padding: "1rem"}} >
            {props.children} - { countingStars(props.children) }

            <i id="icon" className="star icon-star-empty"></i> 
            <i className="star icon-star-empty"></i> 
            <i className="star icon-star-empty"></i> 
            <i className="star icon-star-empty"></i> 
            <i className="star icon-star-empty"></i> 

        </div>
    )
}
export default Rating;