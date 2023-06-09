import React from 'react'
import {useState} from 'react'

function Facebook({data}) {
 
  let [changeText, setChangeText] = useState(false);
  const handleChange = () => {
   setChangeText("England")
    
  };
  console.log(changeText)
  return (
    <div  className='FacebookSimple'>
      <button onClick={()=>handleChange()}>click me</button>
       
    

{data.map((user) => {
    return (
       
      
        
        
        <div className='Mauri' key={user.firstName} id="Mauri">
        <img  className="FacebookImage" src={user.img} alt="userImage" width="200vw" />
        <div>
       
        <p><strong>First Name: </strong>{user.firstName}</p>
        <p><strong>Last Name: </strong>{user.lastName}</p>
        <p><strong>Country: </strong>{user.country}</p>
        {user.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p> }
        {changeText === user.country ? <div style={{backgroundColor: "red"}}><p>hi</p></div> : <p>false</p>}
        
       
       
        </div>
       
        </div>
      
       
      
       

    )
   
})}

 </div>
    
  )
}

export default Facebook