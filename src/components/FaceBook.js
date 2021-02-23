import React from 'react'
import profiles from '../data/berlin.json'

export default function FaceBook() {
    
   
    
    return (
        <div>
            
                {profiles.map(item => (
                    <div style={{display:"flex", gap:"20px", padding:"10px", margin:"10px", border:"solid 2px"}}>
                        <div><img style={{width:"300px"}} src={item.img} alt=""/></div>
                        <div style={{fontSize:"20px", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                            <p><span style={{fontWeight:"bold"}}>First name: </span>{item.firstName}</p>
                            <p><span style={{fontWeight:"bold"}}>Last name: </span>{item.lastName}</p>
                            <p><span style={{fontWeight:"bold"}}>Country: </span>{item.country}</p>
                            <p><span style={{fontWeight:"bold"}}>Type: </span>{item.isStudent? 'Student': 'Teacher'}</p>
                        </div>

                    </div>
                    
                ))}
            
        </div>
    )
}
