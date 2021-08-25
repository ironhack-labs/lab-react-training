import React from "react";


function DriverCard(props) {
    const stars = [1, 2, 3, 4, 5]
    const cardStyle = {
        "background-color": "#455eb5",
        "color": "white",
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "align-items": "center",
        "margin-top": "20px",
        "width": "400px",
        "margin-left": "20px"
    }

    const cardText = {
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "flex-start",
        "margin-left": "5px"
    }

    const imgCard = {
        "width": "70px",
        "height": "70px",
        "border-radius": "100%", 
        "margin-left": "10%"
    }
    return (
        <div className="card" style={cardStyle}>
           <img style={imgCard} src={props.img} />
            <div className="card-body" style={cardText}> <h5>{props.name}</h5>
                <div> {
                    stars.map(star => (
                        <i
                            style={{ color: star <= Math.round(props.rating) ? 'white' : 'grey' }}
                            class="fa fa-star"
                            aria-hodden="true"
                        ></i>
                    ))
                }
                </div>
                <p><small>{props.car.model} - {props.car.licensePlate}</small></p>
            </div>

        </div >

    )
}

export default DriverCard