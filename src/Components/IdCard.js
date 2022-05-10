import React from "react"

export const IdCard = (props)=>{
    const {lastName,firstName,gender,height,birth,picture} = props
    console.log(props)
    return (
           <div className="card">
               <div>
                   <img src={picture} alt="foto"/>
               </div>
               <div className="divPropiedades">
                   <div className="Proiedad">
                       <h3>First name:</h3>
                       <p>{firstName}</p>
                   </div>
                   <div>
                       <h3>Last name:</h3>
                       <p>{lastName}</p>
                   </div>
                   <div>
                       <h3>Gender</h3>
                       <p>{gender}</p>
                   </div>
                   <div>
                       <h3>Height</h3>
                       <p>{height}</p>
                   </div>
                   <div>
                       <h3>Bird</h3>
                       <p>{birth.toString()}</p>
                   </div>
               </div>
            </div> 
        
    )

}