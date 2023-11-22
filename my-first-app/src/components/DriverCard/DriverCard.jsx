import React from "react"

const DriverCard = ({ name, rating, img, car }) => {
    const starRating = Math.round(rating)
    let driverRating

    if (starRating === 0) {
        driverRating = "☆☆☆☆☆";
    } else if (starRating === 1) {
        driverRating = "★☆☆☆☆";
    } else if (starRating === 2) {
        driverRating = "★★☆☆☆";
    } else if (starRating === 3) {
        driverRating = "★★★☆☆";
    } else if (starRating === 4) {
        driverRating = "★★★★☆";
    } else if (starRating === 5) {
        driverRating = "★★★★★"
    }

    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        width: "800px",
        textAlign: "center",
        backgroundColor: "turquoise",
        color: "white"
    }

    const imgStyle = {
        width: "80px",
        borderRadius: "50%",
        marginBottom: "10px",
    }

    return (
        <div style={cardStyle}>
            <h2>{name}</h2>
            <h2>{driverRating}</h2>
            <img src={img} alt="" style={imgStyle} />
            <h2>{car.model} - {car.licensePlate}</h2>
        </div>
    )
}

export default DriverCard