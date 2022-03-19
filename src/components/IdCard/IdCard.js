import React, { Component } from 'react'
import './IdCard.css'

class IdCard extends Component {
    render() {
        const {lastName, firstName, gender, height, birth, picture } = this.props
        return (
            <div id="card" className="d-flex justify-content-arround align-items-center p-3 mb-4 border">
                <img src={picture} alt=""></img>
                <div className='card-info mx-3'>
                    <p><span className='bold'>First Name:</span> {firstName}</p>
                    <p><span className='bold'>Last Name:</span> {lastName}</p>
                    <p><span className='bold'>Gender:</span> {gender}</p>
                    <p><span className='bold'>Height:</span> {height}</p>
                    <p><span className='bold'>Birth:</span> {birth.toString().slice(0,15)}</p>
                </div>
            </div>
        )
    }
}

export default IdCard
