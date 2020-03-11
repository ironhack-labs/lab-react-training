import React from 'react'
import './Student.css'

const Student = ({student}) => {
    return (
        <div>
            <div className='card'>
                    <img  src={student.img} alt={student.firstName} className="card-img-top" />
                    <div className="card-body">
                        <h4>{student.firstName} {student.lastName}, {student.country}</h4>
                        <p>
                            I have over 10 years of experience in technology and haven't
                            worked with a better team than Ironhack
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Student
