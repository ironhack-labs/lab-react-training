import React from 'react';

function Random(props){
    const randomValue = props.min + Math.floor(Math.random() * (props.max-props.min+1))
    return (
      <div className="box">
        {`Random value between ${props.min} and ${props.max} => ${randomValue}`}
      </div>
      )
}

export default Random; 