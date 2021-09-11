/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import './IdCard.css';

class IdCard extends Component {
    render() {
        const {firstName, lastName, gender, height, birth, picture} = this.props;
        return (
            <div className="id">
                <img src={picture} alt="User Photo"/>
                <div className="card">
                   <p><b>First name:</b> {firstName}</p>
                   <p><b>Last name:</b> {lastName}</p>
                   <p><b>Gender:</b> {gender}</p>
                   <p><b>Height:</b> {height /100}m</p>
                   <p><b>Birth:</b> {birth.toDateString()}</p>
                </div>
            </div>
        );
    }    
}

export default IdCard;