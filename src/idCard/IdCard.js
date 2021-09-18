import React, {Component} from 'react';
import './IdCard.css';

class IdCard extends Component {
    render () {
        return (
            <div className="id-card">
                <img src={this.props.picture} alt="User" />
                <div className="card-text">
                    <p><b>First name:</b> {this.props.firstName}</p>
                    <p><b>Last name:</b> {this.props.lastName}</p>
                    <p><b>Gender:</b> {this.props.gender}</p>
                    <p><b>Height:</b> {this.props.height /100}m</p>
                    <p><b>Birth:</b> {this.props.birth.toDateString()}</p>
                </div>
            </div>
        )
    }
}

export default IdCard;