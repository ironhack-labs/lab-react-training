import React from 'react'

const DriverCard = (props) => {
    let style ={
        display : "flex",
    margin: "20px 300px"  }

    let divStyle={
        height : 150,
        width : 150

    }
    let imgStyle = {
        objectFit: "cover",
        height: "100%",
        width: "100%",        
        borderRadius: 999


    }
    let stars = '';
    let nb = Math.round(props.rating);
    if (nb === 0) {stars = '☆☆☆☆☆'} 
    else {
        for (let i = 1; i <= nb; i++) {stars += '★' }
        for (let i = nb + 1; i <= 5; i++) {stars += '☆'}
    }
    return (
        <div style={style}>
            <div style={divStyle}>
                <img style = {imgStyle} src={props.img} alt="" />
            </div>
            <div>
                <p>{props.name}</p>
                <p>{stars}</p>
                <p><span>{props.car.model}</span><span>{props.car.licencePlate}</span> </p>
            </div>
        </div>
    )
}

export default DriverCard
