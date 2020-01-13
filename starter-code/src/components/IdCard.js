import React, { Component } from 'react';
import { render } from 'react-dom';
import berlin from '../data/berlin.json';

class IdCard extends Component {
    render() {
        return <div>            
            <img src={this.props.picture} alt="Profile picture"></img>
            <p>First name:{this.props.firstName} </p>
            <p>Last name: {this.props.lastName}</p>
            <p>Gender {this.props.gender}</p>
            <p>Height:{this.props.height / 100}m</p>
            <p>Birth: {this.props.birth}</p>
            </div>
    }

}


export default IdCard