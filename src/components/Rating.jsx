import React from 'react';

const Rating = (props) => {
    // console.log(Math.round(props.children));
    const star = (test) =>{
        if(test === 0){
            return "☆☆☆☆☆"
        }else if(test===1){
            return "★☆☆☆☆"
        }else if(test===2){
            return "★★☆☆☆"
        }else if(test===3){
            return "★★★☆☆"
        }else if(test===4){
            return "★★★★☆"
        }else return "★★★★★"
    }
  return (
  <p>{star(Math.round(props.children))}</p>
    );
};

export default Rating;
