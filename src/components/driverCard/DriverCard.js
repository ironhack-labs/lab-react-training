import React from 'react'

function DriverCard(props) {

    const stars = [1, 2, 3, 4, 5]
    
    const divCardStyle = {
        'background-color': `#455eb5`,
        'color': 'white',
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'center',
        'margin-top': '20px'
    };

    const textDivStyle = {
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'flex-start',
        'margin-left': '5px'
    };

    const imgDivStyle = {
        'width': '70px',
        'height': '70px',
        'border-radius': '100%',
        'margin-left': '200px'
    };

    const imgStyle = {
        'width': '70px',
        'height': '70px',
        'border-radius': '100%'
    };

    return (
        <div style={divCardStyle} class="card">
            <div style={imgDivStyle}>
                <img style={imgStyle} src={props.img}></img>
            </div>
            <div style={textDivStyle} class="card-body">
                <h5>{props.name}</h5>
                <div>
                    {stars.map(star => (
                    <i 
                    style={{ color: star <= Math.round(props.rating) ? 'white' : 'grey'}}
                    class="fa fa-star" 
                    aria-hodden="true"
                    ></i>
                    ))}                    
                </div>
                <p><small>{props.car.model} - {props.car.licensePlate}</small></p>

            </div>
        </div>

    )
}

export default DriverCard