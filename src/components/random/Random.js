import React from 'react';

const Random= (props) => {
    const product = Math.floor(Math.random() * props.max) + props.min;
    return (
        <div className="box">Random value between {props.min} and {props.max} =&gt; {product}</div>
    );
};
    
export default Random;