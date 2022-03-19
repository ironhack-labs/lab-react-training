import React, {Component} from 'react';
import './IdCard.css'

class IdCard extends Component {
    render() {
        return (
            <div className="id-card container">
                <img src={`${this.props.picture}`} alt="" />
                <div className="id-card-content">
                    <p><span>First name</span>: {this.props.firstName}</p>
                    <p><span>Last name</span>: {this.props.lastName}</p>
                    <p><span>Gender</span>: {this.props.gender}</p>
                    <p><span>Height</span>: {this.props.height}</p>
                    <p><span>Birth</span>: {this.props.birth.toString().slice(0, 15)}</p>
                </div>
            </div>
        )
    }
}

export default IdCard;