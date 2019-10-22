import React from 'react';

const IdCard = (props) => {
    return (<div>
        <p><img alt="broken" src={props.picture}></img> </p>
        <p>Firstname: {props.firstName} </p>
        <p>Lastname: {props.lastName} </p>
        <p>Gender: {props.gender} </p>
        <p>Height: {props.height} </p>
        <p>Birth: {props.birth.getDate() + '/' + props.birth.getMonth() + '/' + props.birth.getFullYear()} </p> ,

    </div>)
};




export default IdCard;