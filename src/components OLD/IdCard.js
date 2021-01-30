import React, { Component } from 'react';

class IdCard extends Component {

    render({lastName, firstName, gender, height, birth, picture}=this.props) {

        return (
            <div className='cardCont'>
                <img src={picture} />
                <div>
                    <p><strong>First name:</strong> {firstName}</p>
                    <p><strong>Last name:</strong> {lastName}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Birth:</strong> {birth.toString()}</p>
                </div>
            </div>
        )

    }

}

export default IdCard;