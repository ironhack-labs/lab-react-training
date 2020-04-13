import React, { Component } from 'react';

class IdCard extends Component {
    render(){
        const { firstName, lastName, gender, height, birth, picture } = this.props;
        return (
            <div className="">
                <img className="" alt="" src={picture}/>
                
                <div className="">
                <p>First Name:{firstName}</p>
                <p> Last Name: {lastName}</p>
                <p> Gender: {gender}</p>
                <p> Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>
                </div>
            
            </div>
        )
    }
}

export default IdCard;