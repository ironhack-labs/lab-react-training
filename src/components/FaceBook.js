import { buildQueries } from '@testing-library/react';
import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

function FaceBook(){
const button = document.getElementsByName("button")
const [selected , setSelected] = useState(false)

const handleColor = () => {
    setSelected(!selected)
}



    return(
        <div>
         <div className='allCountryButtons'>
            <button className='countryButton' >All</button>
            {profiles.map(profile =>{
                return <button onClick={handleColor} style={{background: selected ? "red" : "white" }} 
                               className='countryButton'>{profile.country}</button>
            }
            )}
         </div>
         <div className="people">
        {profiles.map(profile =>{
            return <div className="faceBookCard">
                      <img className='profilePic' src={profile.img} alt="profileImg"/>
                      <div className='personalInfo'>
                      <p> <strong>First name:</strong> {profile.firstName}</p>
                      <p><strong>Last name:</strong> {profile.lastName}</p>
                      <p><strong>Country:</strong> {profile.country}</p>
                      <p><strong>Type: </strong>{profile.isStudent ? "Student" : "Teacher"}</p>
                      </div>
                   </div>   
        })
        }
        </div>
        </div>
    )
}

export default FaceBook;