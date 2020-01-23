import React, { Component } from 'react';
import "./index.css";

class IdCard extends Component {

    render() {
        return (
            <div className="image">
                <img src={this.props.picture} alt="bilder" />
                <div className="details">
                    <span><b>First name: </b>{this.props.firstName}</span>
                    <span><b>Last name: </b>{this.props.lastName}</span>
                    <span><b>Gender: </b>{this.props.gender}</span>
                    <span><b>Height: </b>{this.props.height.toString()}</span>
                    <span><b>Birth: </b>{this.props.birth.toDateString()}</span>
                </div>
            </div>
        )
    }
}




export default IdCard;