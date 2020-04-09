import React, { Component } from 'react';

class IdCard extends Component {
    render() {
        const {picture, firstName, lastName, gender, height, birth} = this.props;
        return (
            <div className='user-container'>
                <div className='user-image'>
                    <img src={picture} alt='user'></img>
                </div>
                <div className='user-information'>
                    <p>First name: {firstName}</p>
                    <p>Last name: {lastName}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Height: {birth}</p>
                </div>
            </div>
        )
    }
}


export default IdCard;