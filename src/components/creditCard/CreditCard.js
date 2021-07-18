import React from 'react'

function CreditCard(props) {

    const bgColor = props.bgColor

    const divStyle = {
        'background-color': `${bgColor}`,
        'width': '250px',
        'display': 'inline-block',
        'margin-right': '20px',
        'margin-bottom': '20px',
        'position': 'relative'
    };

    const pStyle = {
        'font-size': '20px',
        'margin-top': '60px',
        'margin-left': '20px',
        'color': props.color,
    };

    const pStyleSmallTop = {
        'font-size': '12px',
        'margin-top': '5px',
        'margin-bottom': 0,
        'margin-left': '10px',
        'color': props.color,
    };

    const pStyleSmallBottom = {
        'font-size': '12px',
        'margin-top': 0,
        'margin-bottom': '10px',
        'margin-left': '10px',
        'color': props.color,
    };

    const spanStyle = {
        'font-size': '12px',
    };
    
    let imgStyle = {
        'width': '50px',
        'position': 'absolute',
        'top': '15px',
        'right': '15px'
    };        



    const lastFourDigits = props.number.split("").slice(12).join("")

    return (
        <div class="card" style={divStyle}>
            <img style={imgStyle} src={ props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"}></img>
                <p style={pStyle}>
                    <span style={spanStyle}>&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; </span>
                    {lastFourDigits}
                </p>
                <p style={pStyleSmallTop}>
                    Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}
                </p>
                <p style={pStyleSmallBottom}>
                    {props.owner}
                </p>
        </div>
    )
    
}

export default CreditCard