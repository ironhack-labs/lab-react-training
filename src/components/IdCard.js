import React, { Component } from 'react';
import './IdCard.css';

class IdCard extends Component {
    render() {
        return (
            <div className='idcard-container container'>
                <img className='content' src={this.props.picture} alt='avatar'/>
                <div className='idcard-data'>
                    <p className='idcard-p'><b>First name: </b>{this.props.firstName}</p>
                    <p className='idcard-p'><b>Last name: </b>{this.props.lastName}</p>
                    <p className='idcard-p'><b>Gender: </b>{this.props.gender}</p>
                    <p className='idcard-p'><b>Height: </b>{this.props.height/100}m</p>
                    <p className='idcard-p'><b>Birth: </b>{this.props.birth.toDateString()}</p>
                </div>
            </div>
        );
    }
}

export default IdCard;