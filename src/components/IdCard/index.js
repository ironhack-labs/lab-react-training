import React, { Component } from 'react';
import "./style.css";
import NameValue from '../NameValue'

class IdCard extends Component {
    render(){
        const {lastName, firstName, gender, height, picture} = this.props;
        return (
            <div className="idcard">
                <img src={picture} alt={firstName} width="160" height="160"/>
                <div className="elements">
                    <NameValue text="First Name: " value={firstName}/>
                    <NameValue text="Second Name: " value={lastName}/>
                    <NameValue text="Gender: " value={gender}/>
                    <NameValue text="Height: " value={height}/>
                </div>
            </div>
        )
    }
}

export default IdCard;