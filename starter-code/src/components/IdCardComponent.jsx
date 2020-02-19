import React from 'react';

const IdCardComponent = props => {
    return (
        <section id="firstCardContainer">
            <img src={props.picture} alt="" width='150px' id="firstCardImage"/>
            <div id="infoCard">
                <h2>First/Last name: {props.firstName} {props.lastName}</h2>
                <h4>Gender: {props.gender}</h4>
                <h5>Height: {props.height} m</h5>
                <h5>Birth: {props.birth.toDateString()} </h5>
            </div>
        </section>
    )
}

export default IdCardComponent;
