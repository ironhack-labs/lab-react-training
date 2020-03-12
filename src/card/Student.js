import React from 'react'
import './Student.css'

const Student = ({student, bgColor}) => {
    const {firstName, lastName, country, img, isStudent} = student

    return (
        <div>
              
            <div className='card' style={{backgroundColor: bgColor}} >
                    <img  src={img} alt={firstName} className="card-img-top" />
                    <div className="card-body">
                        <p><b>First name:</b> {firstName} </p>
                        <p><b>Last name:</b> {lastName} </p>
                        <p><b>Country:</b> {country} </p>
                        <p><b>Type:</b> {isStudent? 'Student':'Teacher'} </p>
                    </div>
                </div>
        </div>
    )
}

export default Student
