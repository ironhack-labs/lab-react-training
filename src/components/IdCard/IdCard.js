import React, { Component } from 'react'
import './IdCard.css'

class IdCard extends Component {
    constructor(props){
        super(props);
        this.lastName = props.lastName;
        this.firstName = props.firstName;
        this.gender = props.gender;
        this.height = props.height;
        this.birth = (props.birth).toJSON();
        this.picture = props.picture;
    }

    render(){
        return (
            <div className='card'>
            <img src={this.picture} alt="avatar profile" />
                <div className='card-body'>
                    <p><strong>First Name:</strong> {this.firstName}</p>
                    <p><strong>Gender:</strong> {this.gender}</p>
                    <p><strong>Height:</strong> {this.height}</p>
                    <p><strong>Birth</strong> {this.birth}</p>
                </div>
            </div>
        )
    }
}


export default IdCard;