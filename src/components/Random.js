import React from 'react';

function Random(props) {

    return (
      <div className="random-container">
        <p>
          Random value between {props.min} and {props.max} is...
          {Math.ceil(Math.random() * (props.max))}
        </p>
      </div>
    );
}

export default Random