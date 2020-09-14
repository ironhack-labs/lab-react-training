import React from 'react'
import Rating from "./Rating"

export default function DriverCard({ name, rating, img, car }) {
    return (
        <div style={{ backgroundColor: "blue", display: 'flex', justifyContent: "center", alignItems: "center", color: "white", borderRadius: 10, width: 600 }}>
            <img src={img} alt={name} style={{ height: 60, width: 60, borderRadius: "50%", objectFit: "cover" }} />
            <div style={{ textAlign: "left", padding: 20 }}>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} {car.licensePlate}</p>
            </div>
        </div>
    )
}
