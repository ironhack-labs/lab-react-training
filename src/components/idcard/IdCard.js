import React, {Component} from 'react';
import './IdCard.css'

class IdCard extends Component {
    render(){
        return(
            <div className='IdCard box'>
                <img src={this.props.picture} alt="Profile"/>
                <div className='right'>
                    <strong>First name:</strong>{this.props.firstName}<br />
                    <strong>Last name:</strong>{this.props.lastName}<br />
                    <strong>Gender:</strong>{this.props.gender}<br />
                    <strong>Height:</strong>{this.props.height.toString()}<br />
                    <strong>Birth:</strong>{this.props.birth.toString()}<br />
                </div>
            </div>
        )
    }
};

export {IdCard}