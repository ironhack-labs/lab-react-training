import React from 'react'
import Button from './Button'
import Student from '../card/Student'

import './Facebook.css'

const Facebook = ({students,findCountry,country,countries}) => {

    
    return (
        <div className='container'>
            <h2>Iteration 13: List and Keys | FaceBook | Simple</h2>
            <hr/>
            <h2>Iteration 14: List and Keys | FaceBook | Advanced</h2>
            <hr/>
            <div className='container btns-country'>
                <div className='row '>
                    <Button classes='m-1' country={'All'} findCountry={findCountry}/>
                    {[...countries].splice(0,4).map((country,i)=> <Button classes='m-1' key={i+1} country={country} findCountry={findCountry}/>)}
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</button>
                        <div className="dropdown-menu">
                        {[...countries].splice(4).map((country,i)=> <Button classes='dropdown-item' key={i+1} country={country} findCountry={findCountry}/>)}
                        </div>
                    </div>
                </div>
            </div>
            {students.map((student,i) => 
                country === student.country || country === 'All' ? <Student key={i+1} student={student} bgColor={'blue'}/>
                : <Student key={i+1} student={student} bgColor={''}/>
            )}
        </div>
    )
}

export default Facebook
