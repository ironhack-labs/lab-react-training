import React, { Component } from 'react';

class IdCard extends Component {
    render({picture, firstName, lastName, gender, height, birth} =this.props) {
        return (
            <div className="id-card">
                <img src={picture}></img>
                <div>
                    <p><span className="bold-text">First name: </span>{firstName}</p>
                    <p><span className="bold-text">Last name: </span>{lastName}</p>
                    <p><span className="bold-text">Gender: </span>{gender}</p>
                    <p><span className="bold-text">Height: </span>{height.toString().slice(0,1) + "." + height.toString().slice(1)}</p>
                    <p><span className="bold-text">Birth: </span>{birth.toString().split("GMT")[0]}</p>
                </div>
            </div>
        );
    }
}

export default IdCard;