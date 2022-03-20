import React, { Component } from "react"

class DriverCard extends Component {
    state = {}
    render() {
        const { name, img, car } = this.props
        return (
            <div style={{width: "400px", height: "300px", backgroundColor: "blue", color: "white"}}>
                <h3>{name}</h3>
                <img src={img} style={{width: "250px", height: "150px", borderRadius: "100px"}} img="quitaavisoo"/>
                <p>{car.model}{car.licensePlate}</p>
            </div>
        )
    }
}

export default DriverCard;