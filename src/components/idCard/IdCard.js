import React, { Component } from "react";
import './IdCard.css'

class IdCard extends Component {

    render() {
        return(
            <div className="card">
                <div className="profile-img">
                    <img src={this.props.picture} />
                </div>

                <div>
                    <p>First name: {this.props.firstName}</p>
                    <p>Last name: {this.props.lastName}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Birth: {this.props.birth.toString().slice(0, 15)}</p>
                </div>
            </div>
        )
    }
}

export default IdCard