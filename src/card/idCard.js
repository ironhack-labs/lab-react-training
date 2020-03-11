import React from 'react'
import Student from './Student'

const idCard = ({students}) => {
// console.log("students", students)
    
    return (
        <div className="container"> 
             <h1 className="text-center">IdCard</h1>
            {students.map(student => <Student key={student.img} student={student}/> )}
        </div>
    )
}

export default idCard
