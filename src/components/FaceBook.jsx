import React from 'react'
import '../assets/css/FaceBook.css'


const FaceBook = ({profiles}) => {

    
    return (
        
        <div className="FaceBook">
         {profiles.map((profile) => (
            
            <div className='facebook__user d-flex'>
                <div className='px-3 py-3'>
                    <img src={profile.img} alt="" width='200'/>
                </div>
                <div className='d-flex flex-column px-4 justify-content-center'>
                    <p><b>Fist Name:</b> {profile.firstName}</p>
                    <p><b>Last Name:</b> {profile.lastName}</p>
                    <p><b>Country:</b> {profile.country}</p>
                    {profile.isStudent ? <p><b>Type:</b>Student</p> : <p><b>Type:</b>Teacher</p>}
                </div>
            </div>
         ))}   

        </div>
    )
  }

export default FaceBook