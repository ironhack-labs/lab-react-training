import React, { Component } from "react"

class IdCard extends Component {
    state = {}

    render() {
        const { lastName, firstName, gender, height, birth, picture } = this.props
        return (
            <div style={{border: "1px solid black", display: "flex", minWidth:"500px"}}>
                <img src={picture} style={{minWidth:"200px"}} />
                <div style={{margin: "auto"}} >
                    <p><strong>First name: </strong>{firstName}</p>
                    <p><strong>Last name</strong>{lastName}</p>
                    <p><strong>Gender</strong>{gender}</p>
                    <p><strong>Height</strong>{height}</p>
                    <p><strong>Birth</strong>{birth.toLocaleString()}</p>
                </div>
            </div>
        );
    }
}

export default IdCard;