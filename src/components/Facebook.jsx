import React from 'react'

function Facebook({data}) {
  return (
    <div className='FacebookSimple'>
{data.map((user) => {
    return (
        
        <div className='Mauri' key={user.firstName}>
        <img className="FacebookImage" src={user.img} alt="userImage" width="200vw" />
        <div>
        <p><strong>First Name: </strong>{user.firstName}</p>
        <p><strong>Last Name: </strong>{user.lastName}</p>
        <p><strong>Country: </strong>{user.country}</p>
        {user.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p> }
        </div>
       
        </div>
        
       
      
       

    )
   
})}
 </div>
    
  )
}

export default Facebook