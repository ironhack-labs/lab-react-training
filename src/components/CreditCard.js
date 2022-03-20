import React, { Component } from "react"

class CreditCard extends Component {
    state = {}
    render() {
        const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props
        return (
            <div style={{ width: "400px", height: "200px", backgroundColor: bgColor, borderRadius: "14px", display: "flex", color: color, flexDirection: "column" }}>
                <div>{type}</div>
                <div>{number}</div>
                <div>{expirationMonth}</div>
                <div>{expirationYear}</div>
                <div>{bank}</div>
                <div>{owner}</div>
            </div>
        )
    }
}

export default CreditCard;