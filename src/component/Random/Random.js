import React from 'react';
import '../../App.css';

function Random(props) {
    let newValue = props.min + Math.floor(Math.random()) * props.max;
    return (
        <div className="box-black-border">
        <b>
            Random value between {props.min} and {props.max} = {newValue}
        </b>
        </div>
    );
}

export default Random;