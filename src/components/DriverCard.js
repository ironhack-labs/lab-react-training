import React from 'react';
import Rating from './Rating';
import styled from 'styled-components';

function DriverCard (props){

    const Div = styled.div`
        width: 90%;
        height: auto;
        background-color: #455EB5;
        color: white;
        padding: 20px;
        box-sizing: border-box;
        margin: 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        font-size: 1.2em;
        border-radius: 10px;
    `;

    const Span = styled.span`
        font-size: 1.8em;
    `;

    return(
        <Div>
            <div style={{
                "width": "7em", 
                "height": "7em",
                "background-image": `url(${props.img})`,
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center top",
                "border-radius": "50%",
                "margin-right": "15px"
            }}></div>
            <div>
                <h2 style={{"margin-bottom": "0.3em"}}>{props.name}</h2>
                <Span><Rating>{props.rating}</Rating></Span>
                <p style={{"margin-top": "0.1em"}}>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </Div>
    )
}

export default DriverCard;