import React from 'react'
import {useState} from 'react'

function Facebook({data}) {
 
  let [changeText, setChangeText] = useState(false);
  const handleEnglandButton = () => {
   
   setChangeText("England")

    
  };
  const handleUsaButton = () => {
    setChangeText("USA")
     
   };
   const handleNigeriaButton = () => {
    setChangeText("Nigeria")
     
   };
   const handleSwedenButton = () => {
    setChangeText("Sweden")
     
   };
   const handleMalaysiaButton = () => {
    setChangeText("Malaysia")
     
   };
   const handleTaiwanButton = () => {
    setChangeText("Taiwan")
     
   };
   const handleGermanyButton = () => {
    setChangeText("Germany")
     
   };
   const handleBrazilButton = () => {
    setChangeText("Brazil")
     
   };
  console.log(changeText)
  return (
    <div  className='FacebookSimple'>
      <div className="buttons">
      <button onClick={()=>handleEnglandButton()}>England</button>
      <button onClick={()=>handleUsaButton()}>USA</button>
      <button onClick={()=>handleNigeriaButton ()}>Nigeria</button>
      <button onClick={()=>handleSwedenButton ()}>Sweden</button>
      <button onClick={()=>handleMalaysiaButton()}>Malaysia</button>
      <button onClick={()=>handleGermanyButton ()}>Germany</button>
      <button onClick={()=>handleTaiwanButton ()}>Taiwan</button>
      <button onClick={()=>handleBrazilButton()}>Brazil</button>
      </div>

{data.map((user) => {
    return (
       
      
        
        
        <div  >
        {changeText === user.country ? <div id="div" className='facebookDiv' key={user.firstName} style={{backgroundColor: "blue"}}> 

        <img  className="FacebookImage" src={user.img} alt="userImage" width="200vw" />
        <div>
       
        <p><strong>First Name: </strong>{user.firstName}</p>
        <p><strong>Last Name: </strong>{user.lastName}</p>
        <p><strong>Country: </strong>{user.country}</p>
       
        {user.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p> }
       
       
       
        </div>
        </div>
         : 
         <div id="div" className='facebookDiv' key={user.firstName}> 

         <img  className="FacebookImage" src={user.img} alt="userImage" width="200vw" />
         <div>
        
         <p><strong>First Name: </strong>{user.firstName}</p>
         <p><strong>Last Name: </strong>{user.lastName}</p>
         <p><strong>Country: </strong>{user.country}</p>
        
         {user.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p> }
        
        
         </div>
        </div>
         
         
         }
        </div>
      
      
      
       

    )
   
})}

 </div>
    
  )
}

export default Facebook