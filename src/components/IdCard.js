import React, { Component } from "react";

//IT.1
class IdCard extends Component {
    render() {
        const {firstName, lastName, gender, height, birth, picture} = this.props;
        return (
            <div className='id-card'>
                <div className='card-info'>
                    <p>First name: {firstName}</p>
                    <p>Last name: {lastName}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Birth: {birth}</p>
                </div>
                <div className='card-image'>
                    <img src={picture} alt='img'></img>
                </div>
            </div>
        )
    }
}

export default IdCard;