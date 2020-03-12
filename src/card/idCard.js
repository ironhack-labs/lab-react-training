import React from 'react'
import Student from './Student'

const idCard = ({students}) => {
// console.log("students", students)
    
    return (
        <div className="container"> 
                   <h2>Iteration 1: Component: IdCard </h2>
                   <hr/>
            {students.slice(0,5).map(student => <Student key={student.img} student={student}/> )}
        </div>
    )
}

export default idCard
