import React from 'react';

const names = {
    border :"1px solid black",
    margin: 10,
    padding: 10,
}

function Random({min,max}){
    return <div style={names} >
    <p>Random value between {min} and {max} = {randomNum({min,max})}</p>
    </div>

}

function randomNum({min,max}){
    return Math.floor(Math.random() * max) + min;
}

export default Random