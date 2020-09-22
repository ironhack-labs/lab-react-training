import React from 'react'

export default function DriverCard(props) {
    let emptyStar = '☆';
    let star = '★'
    const rand = Math.round(Number(props.rating));
    return (
        <div style={{backgroundColor: '#455EB5'}}>
            <h2>{props.name}</h2>
            <img style={{width: '100px', height: '100px', borderRadius: '50%'}} src={props.img}/>
            <div>{star.repeat(rand)}{emptyStar.repeat(5-rand)}</div>
            <p>{props.car.model} -  {props.car.licensePlate} </p>
        </div>
    )
}
