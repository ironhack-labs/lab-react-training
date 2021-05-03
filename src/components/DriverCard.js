import React from 'react'

export default function DriverCard(props) {
    console.log(props);
    let rating = Math.round(props.rating)
    let full = String.fromCharCode(9733);
    let empty= String.fromCharCode(9734);
    let result;
    switch (rating){
        case 0:
            result = empty.repeat(5);
            break;
        case 1:
            result = full + empty.repeat(4);
            break;
        case 2:
            result = full.repeat(2) + empty.repeat(3);
            break;
        case 3:
            result = full.repeat(3) + empty.repeat(2);
            break;
        case 4:
            result = full.repeat(4) + empty;
            break;
        case 5:
            result= full.repeat(5);
            break;
    }

    return (
        <div>
            <div className="DriverCard" style={{backgroundColor: '#455db5', width: '400px', color:'white'}}>
                <img src={props.img} style={{width: '150px', borderRadius: '50%'}} alt="driver"/>
                <p>{props.name}</p>
                <p>{result}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}