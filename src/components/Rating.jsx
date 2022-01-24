import React from 'react';

const Rating = (props) => {
    // console.log(Math.round(props.children));
    const star = () =>{
        for( let i=0;i<5;i++)
        if(i === 0){
            return "☆☆☆☆☆"
        }else if(i===1){
            return "★☆☆☆☆"
        }else if(i===2){
            return "★★☆☆☆"
        }else if(i===3){
            return "★★★☆☆"
        }else if(i===4){
            return "★★★★☆"
        }else return "★★★★★"
    }
  return (
  <p>{star(Math.round(props.children))}</p>
    );
};

export default Rating;
